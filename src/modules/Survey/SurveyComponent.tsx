import React, {useState} from 'react';
import {Box, Container, Typography, Button} from "@material-ui/core";
import TextfieldInputComponent from "./QuestionComponents/TextFieldInputComponent";
import OptionsComponent from "./QuestionComponents/OptionsComponent";
import SliderInputComponent from "./QuestionComponents/SliderComponent";
import CheckBoxsInputComponent from "./QuestionComponents/CheckboxsInputComponent";
import {Questions, QuestionResults, QuestionResult} from "./QuestionsFormat";


interface SurveyComponentProps {
    questions: Questions,
    db?: any,
    dbCollectionName?: string,
}


export default function SurveyComponent(props: SurveyComponentProps) {
    const [submitted, setSubmitted] = useState(false);
    const [questionResults, setQuestionResults] = useState([] as QuestionResults);
    const [contacts, setContacts] = useState({
        name: '',
        email: '',
    });

    const updateQuestionResults = (result: QuestionResult) => {
        setQuestionResults(prevState => {
            prevState[result.questionNumber] = result;
            return prevState;
        });
    };

    const buildSaveObject = () => {
        let result : any = {};
        Object.keys(contacts).forEach(contact => {
            //@ts-ignore
            result[contact] = contacts[contact];
        });

        questionResults.forEach((questionResult, i) => {
            //@ts-ignore
            Object.keys(questionResult).forEach(key => questionResult[key] === undefined && delete questionResult[key]);
            result[i] = questionResult;
        });

        console.log(result);

        return result;
    };

    const saveToDatabase = async () => {

        if (props.db && props.dbCollectionName) {
            props.db.collection(props.dbCollectionName).add(buildSaveObject());
        }
    };

    const handleSubmit = () => {
        if (submitted) {
            setSubmitted(false);
            return;
        }

        for (let contact of Object.keys(contacts)) {
            // @ts-ignore
            if (!contacts[contact]) {
                alert("Please fill in all contact information!");
                return;
            }
        }

        saveToDatabase().then();

        setSubmitted(true);
    };

    const survey = (
        <Container maxWidth="md">
            <Typography variant="h3">
                Survey
            </Typography>
            <br />
            <br />

            <Box>
                <Typography variant="h5">What is your name and email?</Typography>
                <br />
                <TextfieldInputComponent
                    question={{question: "What is your name?", choiceType: "textfield"}}
                    number={0}
                    setResultCallback={(result)=>{setContacts(contacts => {
                        contacts.name = result.textInputValue || '';
                        return contacts;
                    })}}
                />
                <TextfieldInputComponent
                    question={{question: "What is your email?", choiceType: "textfield"}}
                    number={1}
                    setResultCallback={(result)=>{setContacts(contacts => {
                        contacts.email = result.textInputValue || '';
                        return contacts;
                    })}}
                />
                <br />
                <br />
                <br />
            </Box>

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
                <Typography variant="caption" style={{width: '25vw'}}>
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
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
                {submitted ? 'Back' : 'Submit'}
            </Button>
            <br />
            <br />
        </div>
    )
}

