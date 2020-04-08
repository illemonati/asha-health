import React, {ReactNode} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './styles.css';
import {LatLng, LatLngExpression} from "leaflet";
import {RouteComponentProps} from 'react-router-dom';
import * as queryString from 'querystring';
import {MapPoints} from "./MapPointFormat";


interface MapComponentProps {
    kind: 'MapComponentProps'
    center: LatLngExpression
    mapPoints?: MapPoints
    children?: ReactNode
}


const MapComponent: React.FC<MapComponentProps | RouteComponentProps> = (props: MapComponentProps | RouteComponentProps) => {
    let center: LatLngExpression;
    let mapPoints: MapPoints| null = null;

    if ('kind' in props && props.kind === "MapComponentProps") {
        console.log(props);
        center = props.center;
    } else {
        // @ts-ignore
        const parsedQuery = queryString.parse(props.location.search.substring(1));
        const centerLat = parseFloat(parsedQuery['centerLat'] as string);
        const centerLng = parseFloat(parsedQuery['centerLng'] as string);
        if (parsedQuery['mapPoints']){
            mapPoints = JSON.parse(parsedQuery['mapPoints'] as string) as MapPoints;
        }
        center = new LatLng(centerLat, centerLng);
    }

    return (
        <div className="MapComponent">
            <Map center={center} zoom={12} className="MapComponentMainMap">
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

export default MapComponent;

