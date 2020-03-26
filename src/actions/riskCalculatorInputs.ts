import {RiskCalculatorFieldResults} from "../modules/RiskCalculator/RiskCalculatorFormat";

export function updateRiskCalculatorInputs(newInputs: RiskCalculatorFieldResults) {
    return {
        type: 'UPDATE',
        payload: newInputs
    }
}

