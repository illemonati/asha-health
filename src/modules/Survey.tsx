import React, {ChangeEvent, useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import questions from './questions.json';
import {Box, FormControlLabel, Input, Radio, Slider, TextField} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";




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
                    return (
                        <FormControlLabel control={<Radio />} label={choice} value={choice}/>
                    )
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


                    if (question.choicetype === "radio") {
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
                        </Box>
                    )


                }) }

            </Container>
        </div>
    )
}

