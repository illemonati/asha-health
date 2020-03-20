
export type QuestionResults = Array<QuestionResult>;

export interface QuestionResult {
    questionNumber: number,
    choiceType: string,
    choice?: string|ChoiceType,
    choices?: Array<string|ChoiceType>,
    sliderValue?: number,
    textInputValue?: string,
    extraInfo?: string
}



export type Questions = Array<Question>;

export interface Question {
    question: string,
    choiceType: string,
    sliderConfig?: SliderConfig,
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
    noRange?: boolean,
    textOptions?: Array<string>
    marks?: boolean
}


export interface SliderMark {
    value: number,
    label: string,
}
