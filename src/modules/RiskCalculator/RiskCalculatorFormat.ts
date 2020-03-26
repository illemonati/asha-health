
export type RiskCalculatorFieldResults = Array<RiskCalculatorFieldResult>;

// Interface for the result returned from a field
export interface RiskCalculatorFieldResult {
    field: RiskCalculatorField,
    result: number | boolean
}




// Interface for variables needed for calculations
export interface RiskCalculatorVariables {
    age: number,
    CVAStrokeDeficit: number,
    DypsneaME: number,
    DypsneaRest: number,
    PVPTCA: number,
    HEMImr: number,
    WNDINFmr: number,
    Dementiamr: number,
    HXANGINAmr: number,
    HXPVDmr: number,
    Ulcers: number,
    Malignancy: number,
    ASA4: number,
    PREALBUM: number,
    PRPTT: number,
    Cerebrovascular: number,
    MyocardialInfarction: number,
    PainMedication: number,
    Chemotherapy: number,
    RESTPAIN: number,
    PRBUN: number
}

export type RiskCalculatorFields = Array<RiskCalculatorField>;

// Interface for the an field on the calculator input
export interface RiskCalculatorField {
    fieldNumber: number,
    fieldName: string,
    inputType: string,
    fieldConfig: FieldConfig
}

export interface FieldConfig {
    default: number | boolean
}

export interface NumberFieldConfig extends FieldConfig {
    default: number
}

export interface DropdownFieldConfig extends FieldConfig {
    default: number
    options: Array<String>
}

export interface CheckBoxConfig extends FieldConfig {
    default: boolean
}
