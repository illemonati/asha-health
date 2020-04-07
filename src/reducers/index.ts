
import {combineReducers} from 'redux';
import riskCalculatorInputsStateReducer from "./riskCalculatorInputs";
import serviceWorkerUpdateReducer from "./SWUpdate";
import bottomMenuStateReducer from "./bottomMenuState";



const rootReducer = combineReducers({
    riskCalculatorInputs: riskCalculatorInputsStateReducer,
    waitingSW: serviceWorkerUpdateReducer,
    bottomMenuState: bottomMenuStateReducer
});


export default rootReducer;