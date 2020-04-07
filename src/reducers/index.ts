
import {combineReducers} from 'redux';
import riskCalculatorInputsStateReducer from "./riskCalculatorInputs";
import serviceWorkerUpdateReducer from "./SWUpdate";
import bottomMenuStateReducer from "./bottomMenuState";
import userProfileStateReducer from './userProfileState';



const rootReducer = combineReducers({
    riskCalculatorInputs: riskCalculatorInputsStateReducer,
    waitingSW: serviceWorkerUpdateReducer,
    bottomMenuState: bottomMenuStateReducer,
    userProfileState: userProfileStateReducer
});


export default rootReducer;