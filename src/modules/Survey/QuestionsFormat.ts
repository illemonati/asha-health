
export type QuestionResults = Array<QuestionResult>;

export interface QuestionResult {
    question_number: number,
    choice_type: string,
    choice?: string|ChoiceType,
    choices?: Array<string|ChoiceType>,
    slider_value?: number,
    text_input_value?: string,
    extra_info?: string
}



export type Questions = Array<Question>;

export interface Question {
    question: string,
    choice_type: string,
    slider_config?: SliderConfig,
    choices?: Array<string|ChoiceType>,
}

export interface ChoiceType {
    type: string,
    name: string
}


export interface SliderConfig {
    start: number,
    end: number,
    step: number,
    no_range?: boolean,
    text_options?: Array<string>
    marks?: boolean
}


export interface SliderMark {
    value: number,
    label: string,
}
