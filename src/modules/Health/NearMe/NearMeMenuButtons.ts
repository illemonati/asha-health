import {MenuButtons} from "../../MenuButtons/MenuButtonsConfigFormat";
import {mapQueryToString} from "../../Map/MapPointFormat";



const FreeClinics = {
    centerLng: -122.09992,
    centerLat: 37.42531,
    mapPoints: [
        {
            lng: -122.09992,
            lat: 37.42531,
            popUpString: 'All Care Plus'
        }
    ]
};


const NearMeMenuButtons = [
    {
        buttonText: "Free Clinics",
        linkTo: "/map/query/?"+mapQueryToString(FreeClinics)
    },
    {
        buttonText: "Food Banks",
        linkTo: "/map/food-banks/"
    },
    {
        buttonText: "Mobile Showers",
        linkTo: "#"
    }
] as MenuButtons;

export default NearMeMenuButtons;



