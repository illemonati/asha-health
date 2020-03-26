import React from "react";
import {RiskCalculatorFieldResults} from "../RiskCalculatorFormat";


interface RiskCalculatorResultsComponentProps {
    inputs: RiskCalculatorFieldResults
}

export default function RiskCalculatorResultsComponent(props: RiskCalculatorResultsComponentProps) {
    const inputs = props.inputs;
    return (
        <div className="RiskCalculatorConfigComponent">
            {JSON.stringify(inputs)}
        </div>
    )
}
