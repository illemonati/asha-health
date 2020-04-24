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

const FoodBanks = {
    centerLng: -122.09992,
    centerLat: 37.42531,
    mapPoints: [
        {
            lng: -122.115187,
            lat: 37.423269,
            popUpString: 'South Palo Alto Food Closet'
        },
        {
            lng: -122.078438,
            lat: 37.396917,
            popUpString: 'Community Services Agency'
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
        linkTo: "/map/query/?"+mapQueryToString(FoodBanks)
    },
    {
        buttonText: "Mobile Showers",
        linkTo: "#"
    }
] as MenuButtons;

export default NearMeMenuButtons;



