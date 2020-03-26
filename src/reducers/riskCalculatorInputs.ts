import {RiskCalculatorFieldResults} from "../modules/RiskCalculator/RiskCalculatorFormat";



export default function riskCalculatorInputsStateReducer(state=[], action: any) : RiskCalculatorFieldResults {
    switch (action.type) {
        case 'UPDATE':
            return [...action.payload] as RiskCalculatorFieldResults;
        default:
            return state;
    }
}




