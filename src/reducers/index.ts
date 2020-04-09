
import {combineReducers} from 'redux';
import {riskCalculatorComparisonInputsStateReducer, riskCalculatorInputsStateReducer} from "./riskCalculatorInputs";
import serviceWorkerUpdateReducer from "./SWUpdate";
import bottomMenuStateReducer from "./bottomMenuState";
import userProfileStateReducer from './userProfileState';



const rootReducer = combineReducers({
    riskCalculatorInputs: riskCalculatorInputsStateReducer,
    riskCalculatorComparisonInputs: riskCalculatorComparisonInputsStateReducer,
    waitingSW: serviceWorkerUpdateReducer,
    bottomMenuState: bottomMenuStateReducer,
    userProfileState: userProfileStateReducer
});


export default rootReducer;