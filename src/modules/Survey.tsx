import React, {ChangeEvent, useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import questions from './questions.json';
import {Box, FormControlLabel, Radio, TextField} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";


interface OptionsComponentProps {
    question: any
}

function OptionsComponent(props: OptionsComponentProps) {
    const question = props.question;
    const [value, setValue] = useState(props.question.choices[0]);
    
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue((e.target as HTMLInputElement).value);
    };

    useEffect(() => {
        // alert(`You chose option ${value}`);
    }, [value]);
    
    return (
        <Box>
            <RadioGroup aria-label="Choices" value={value} onChange={changeHandler}>
                {/*
                //@ts-ignore */}
                {question.choices.map((choice) => {
                    return (
                        <FormControlLabel control={<Radio />} label={choice} value={choice}/>
                    )
                })}
            </RadioGroup>
        </Box>
    )
}





function TextfieldInputComponent(props: OptionsComponentProps) {

    return (
        <Box>
            <TextField label="answer" />
        </Box>
    )
}



export default function SurveyComponent() {
    return(
        <div className="SurveyComponent">
            <Container maxWidth="sm">
                <Typography variant="h3">
                    Survey Demo
                </Typography>
                <br />
                <br />
                {questions.map((question, i) => {

                    let optionsElement: any = null;


                    if (question.choicetype === "radio") {
                        optionsElement = (
                            <OptionsComponent question={question}/>
                        )
                    } else if (question.choicetype === "textfield") {
                        optionsElement = (
                            <TextfieldInputComponent question={question}/>
                        )
                    }


                    return (
                        <Box>
                            <Typography variant="h5">{` ${i+1}. ${question.question}`}</Typography>
                            <br />
                            {optionsElement}
                            <br />
                            <br />
                        </Box>
                    )


                }) }

            </Container>
        </div>
    )
}

