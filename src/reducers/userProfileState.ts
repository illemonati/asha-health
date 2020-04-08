
import UserProfile from './../utils/UserProfile';


const defaultProfile = {
    name: "A Person",
    birthDate: (new Date()).toString(),
    avatar: "black-hole.bmp"
};

export default function userProfileStateReducer(state=defaultProfile, action: any) : UserProfile {
    switch (action.type) {
        case 'UPDATE_USER_PROFILE_STATE':
            return action.payload;
        default:
            return state;
    }
}
