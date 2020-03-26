
// Alias for an array of QuestionResult
export type QuestionResults = Array<QuestionResult>;

// Interface for the result of an question
export interface QuestionResult {
    questionNumber: number,
    choiceType: string,
    choice?: string|ChoiceType,
    choices?: Array<string|ChoiceType>,
    sliderValue?: number,
    textInputValue?: string,
    extraInfo?: string
}


// Alias for an array of questions
export type Questions = Array<Question>;


// Interface for one question, with optional fields depending on the question type
export interface Question {
    question: string,
    choiceType: string,
    sliderConfig?: SliderConfig,
    choices?: Array<string|ChoiceType>,
    textfieldLabel?: string
    required?: boolean
}

// Interface for an options in a Question with the choiceType "options"
// Used for non string choices (eg. text input)
export interface ChoiceType {
    type: string,
    name: string
}

// Interface for the configuration of an slider
export interface SliderConfig {
    start: number,
    end: number,
    step: number,
    default?: number,
    noRange?: boolean,
    textOptions?: Array<string>,
    marks?: boolean
}

// Interface for the mark along a slider
// Used for custom Labels
export interface SliderMark {
    value: number,
    label: string,
}
