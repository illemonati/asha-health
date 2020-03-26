
import {combineReducers} from 'redux';
import riskCalculatorInputsStateReducer from "./riskCalculatorInputs";



const rootReducer = combineReducers({
    riskCalculatorInputs: riskCalculatorInputsStateReducer
});


export default rootReducer;