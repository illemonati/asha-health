import React, {useEffect, useState} from 'react';
import {Box, Container, Typography, Button} from "@material-ui/core";
import TextfieldInputComponent from "./QuestionComponents/TextFieldInputComponent";
import OptionsComponent from "./QuestionComponents/OptionsComponent";
import SliderInputComponent from "./QuestionComponents/SliderComponent";
import CheckBoxsInputComponent from "./QuestionComponents/CheckboxsInputComponent";
import {Questions, QuestionResults, QuestionResult} from "./QuestionsFormat";


interface SurveyComponentProps {
    questions: Questions
}


export default function SurveyComponent(props: SurveyComponentProps) {
    const [submitted, setSubmitted] = useState(false);
    const [questionResults, setQuestionResults] = useState([] as QuestionResults);

    const updateQuestionResults = (result: QuestionResult) => {
        setQuestionResults(prevState => {
            prevState[result.questionNumber] = result;
            return prevState;
        });
    };

    useEffect(() => {
        console.log(questionResults);
    }, [questionResults]);



    const survey = (
        <Container maxWidth="md">
            <Typography variant="h3">
                Survey
            </Typography>
            <br />
            <br />
            {props.questions.map((question, i) => {

                let optionsElement: any = null;


                if (question.choiceType === "options") {
                    optionsElement = (
                        <OptionsComponent question={question} number={i} setResultCallback={updateQuestionResults}/>
                    );
                } else if (question.choiceType === "textfield") {
                    optionsElement = (
                        <TextfieldInputComponent question={question} number={i} setResultCallback={updateQuestionResults}/>
                    );
                } else if (question.choiceType === "slider") {
                    optionsElement = (
                        <SliderInputComponent question={question} number={i} setResultCallback={updateQuestionResults}/>
                    );
                } else if (question.choiceType === "checkboxs") {
                    optionsElement = (
                        <CheckBoxsInputComponent question={question} number={i} setResultCallback={updateQuestionResults}/>
                    );
                }



                return (
                    <Box key={i}>
                        <Typography variant="h5">{` ${i+1}. ${question.question}`}</Typography>
                        <br />

                        {optionsElement}
                        <br />
                        <br />
                        <br />
                    </Box>
                )


            }) }
            <br />
            <br />
        </Container>
    );
    const thankyou = (
        <Container maxWidth="md">
            <Typography variant="h3">Thank you</Typography>
            <Box>
                <Typography variant="caption">
                    {JSON.stringify(questionResults)}
                </Typography>
            </Box>
            <br />
            <br />
        </Container>
    );

    return (
        <div className="SurveyComponent">
            {submitted ? thankyou : survey}
            <Button variant="outlined" color="primary" onClick={() => setSubmitted(!submitted)}>
                {submitted ? 'Back' : 'Submit'}
            </Button>
            <br />
            <br />
        </div>
    )
}

