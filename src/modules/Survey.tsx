import React, {ChangeEvent, useEffect, useState} from 'react';

import questions from './questions.json';
import {Box, FormControlLabel, Radio, Slider, TextField, Container, Typography, RadioGroup} from "@material-ui/core";




interface OptionProps {
    question: any,
    number: number
}

function OptionsComponent(props: OptionProps) {
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
                    console.log(typeof choice);
                    if (typeof choice === "string") {
                        return (
                            <FormControlLabel control={<Radio />} label={choice} value={choice}/>
                            // <div></div>
                        )
                    } else if (choice.type === "textfield") {

                        const textInput = (
                            <TextField style={{width: "100%"}} label={choice.name} disabled={value !== choice.name} />
                        );

                        return (
                            <FormControlLabel control={<Radio/>} label={textInput} value={choice.name}/>
                        )
                    }
                    return null;

                })}
            </RadioGroup>
        </Box>
    )
}

interface SliderConfig {
    start: number,
    end: number,
    step: number
}


function SliderInputComponent(props: OptionProps) {

    const range = props.question.range as SliderConfig;

    function valuetext(value: number) {
        return `${value}`;
    }

    return (
        <Box>
            <Typography gutterBottom>
                {`${range.start} - ${range.end}`}
                <Slider
                    defaultValue={0}
                    step={range.step}
                    min={range.start}
                    max={range.end}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    marks

                />
            </Typography>
        </Box>
    )
}





function TextfieldInputComponent(props: OptionProps) {

    return (
        <Box>
            <TextField style={{width: "100%"}} label="answer" />
        </Box>
    )
}



export default function SurveyComponent() {
    return(
        <div className="SurveyComponent">
            <Container maxWidth="md">
                <Typography variant="h3">
                    Survey Demo
                </Typography>
                <br />
                <br />
                {questions.map((question, i) => {

                    let optionsElement: any = null;


                    if (question.choicetype === "options") {
                        optionsElement = (
                            <OptionsComponent question={question} number={i}/>
                        )
                    } else if (question.choicetype === "textfield") {
                        optionsElement = (
                            <TextfieldInputComponent question={question} number={i}/>
                        )
                    } else if (question.choicetype === "slider") {
                        optionsElement = (
                            <SliderInputComponent question={question} number={i}/>
                        )
                    }


                    return (
                        <Box>
                            <Typography variant="h5">{` ${i+1}. ${question.question}`}</Typography>
                            <br />
                            {optionsElement}
                            <br />
                            <br />
                            <br />
                        </Box>
                    )


                }) }

            </Container>
        </div>
    )
}

