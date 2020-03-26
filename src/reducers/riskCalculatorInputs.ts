import {RiskCalculatorFieldResults} from "../modules/RiskCalculator/RiskCalculatorFormat";


const initialState = [] as RiskCalculatorFieldResults;

export default function riskCalculatorInputsStateReducer(state=initialState, action: any) : RiskCalculatorFieldResults {
    switch (action.type) {
        case 'UPDATE':
            return action.payload as RiskCalculatorFieldResults;
        default:
            return state;
    }
}




