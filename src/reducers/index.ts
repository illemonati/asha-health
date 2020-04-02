
import {combineReducers} from 'redux';
import riskCalculatorInputsStateReducer from "./riskCalculatorInputs";
import serviceWorkerUpdateReducer from "./SWUpdate";



const rootReducer = combineReducers({
    riskCalculatorInputs: riskCalculatorInputsStateReducer,
    waitingSW: serviceWorkerUpdateReducer
});


export default rootReducer;