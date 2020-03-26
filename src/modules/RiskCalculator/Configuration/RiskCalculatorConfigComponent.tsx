import React from "react";
import {RiskCalculatorFieldResult, RiskCalculatorFields} from "../RiskCalculatorFormat";
import './styles.css';
import NumberFieldComponent from "./FieldComponents/NumberFieldComponent";
import DropdownFieldComponent from "./FieldComponents/DropdownFieldComponent";
import CheckboxFieldComponent from "./FieldComponents/CheckboxFieldComponent";

interface RiskCalculatorConfigComponentProps {
    fields: RiskCalculatorFields,
    callBack: (result: RiskCalculatorFieldResult) => any,
}


export default function RiskCalculatorConfigComponent(props: RiskCalculatorConfigComponentProps) {



    return (
        <div className="RiskCalculatorConfigComponent">
            <br />
            {props.fields.map((field, i) => {
                let fieldComponent: any;
                if (field.inputType === 'number') {
                    fieldComponent = (
                        <NumberFieldComponent field={field} key={i} callBack={props.callBack}/>
                    )
                } else if (field.inputType === 'dropdown') {
                    fieldComponent = (
                        <DropdownFieldComponent field={field} key={i} callBack={props.callBack} />
                    )
                } else if (field.inputType === 'checkbox') {
                    fieldComponent = (
                        <CheckboxFieldComponent field={field} key={i} callBack={props.callBack}/>
                    )
                }
                return fieldComponent;
            })}
        </div>
    )
}

