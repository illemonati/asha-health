import React, {CSSProperties, useCallback, useEffect, useState} from 'react'
import {Map, Marker, Popup, TileLayer, Viewport} from 'react-leaflet'
import {LatLng} from "leaflet";
import '../styles.css';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import {MapPoints} from "../MapPointFormat";
import {
    getBrowserLatLng,
    getLatLngFromQuery,
    getZipFromLatLng
} from "../map-utils";
import {getFreeClinicsFromZip, getFullFreeClinicAddress} from "../FreeClinic";


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const FreeClinicsMapComponent: React.FC = () => {

    const [mapPoints, setMapPoints] = useState([] as MapPoints);
    const [center, setCenter] = useState(new LatLng(37.403944, -122.166903));
    const [zoomLevel, setZoomLevel] = useState(10);
    const [listOfFreeClinics, setListOfFreeClinics] = useState([] as any[]);


    const refreshListOfFreeClinics = useCallback(
        async () => {
            try {
                const zips = new Set<number>();

                for (let i = center.lat-0.1; i < center.lat+0.1; i+=0.1) {
                    for (let j = center.lng-0.1; j < center.lng+0.1; j+=0.1) {
                        try {
                            zips.add(await getZipFromLatLng(new LatLng(i, j)));
                        } catch (e) {}
                    }
                }



                // @ts-ignore
                for (const zip of zips.values()) {
                    for (let i = zip ; i < zip + 1; ++i) {
                        const clinics = await getFreeClinicsFromZip(i);
                        setListOfFreeClinics(freeClinics => {
                            for (let clinic of clinics) {
                                if (!(freeClinics.some(e => e['name'] === clinic['name']))) {
                                    freeClinics.push(clinic);
                                }
                            }
                            return freeClinics.slice();
                        });
                    }
                }
            } catch (e) {

            }
        },
        [center],
    );


    useEffect(() => {
        getBrowserLatLng()
            .then(c => setCenter(c))
            .catch(e => console.log('Could not determine browser location : ' + e));
        refreshListOfFreeClinics().then();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const f = async () => {
            const npoints = [] as MapPoints;
            for (const freeClinic of listOfFreeClinics) {
                try {
                    const latLng = await getLatLngFromQuery(getFullFreeClinicAddress(freeClinic));
                    const point = {
                        popUpString: freeClinic['name'],
                        lat: latLng!.lat!,
                        lng: latLng!.lng!
                    };
                    npoints.push(point);
                } catch (e) {}
            }
            setMapPoints(npoints);
        };
        f().then();
    }, [listOfFreeClinics]);


    const [mapStyle, setMapStyle] = useState({height: window.innerHeight, top: 0} as CSSProperties);
    useEffect(() => {
        const resizeFunction = () => {
            const bottomBarHeight = document.querySelector('.bottomNavActions')?.getBoundingClientRect().height;
            const mainAppBarHeight = document.querySelector('.mainAppBar')?.getBoundingClientRect().height;
            const style = {
                height: window.innerHeight - (bottomBarHeight || 0) - (mainAppBarHeight || 0),
                top: (mainAppBarHeight || 0)
            };
            setMapStyle(style);
        };
        window.addEventListener('resize', () => {
            resizeFunction();
        });
        resizeFunction();
        return () => {
            window.removeEventListener('resize', resizeFunction);
        }
    }, []);

    const handleViewportChanged = (viewport: Viewport) => {
        const newCenter = new LatLng(viewport.center![0], viewport.center![1]);

        const newZoom = viewport.zoom;
        if (newZoom) {
            setZoomLevel(_ => newZoom);
        }
        setCenter(newCenter);
        refreshListOfFreeClinics().then();
    };


    return (
        <div className="MapComponent" style={mapStyle}>
            <Map center={center} zoom={zoomLevel} className="MapComponentMainMap"
                 onViewportChanged={handleViewportChanged}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapPoints?.map((mapPoint, i) => {
                    const coord = new LatLng(mapPoint.lat, mapPoint.lng);
                    return (
                        <Marker position={coord} key={i}>
                            <Popup>{mapPoint.popUpString}</Popup>
                        </Marker>
                    )
                })}
            </Map>
        </div>
    )
};

export default FreeClinicsMapComponent;
