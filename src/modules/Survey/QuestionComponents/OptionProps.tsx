import {Question, QuestionResult} from "../QuestionsFormat";

export interface OptionProps {
    question: Question,
    number: number,
    setResultCallback: (result: QuestionResult) => any
}
