import React, {ChangeEvent, useEffect, useState} from 'react';

import questions from './questions.json';
import {
    Box,
    FormControlLabel,
    Radio,
    Slider,
    TextField,
    Container,
    Typography,
    RadioGroup,
    FormGroup, Checkbox
} from "@material-ui/core";




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
                {question.choices.map((choice, i) => {
                    if (typeof choice === "string") {
                        return (
                            <FormControlLabel control={<Radio />} label={choice} value={choice} key={i}/>
                            // <div></div>
                        )
                    } else if (choice.type === "textfield") {

                        const textInput = (
                            <TextField style={{width: "100%"}} label={choice.name} disabled={value !== choice.name} key={i} />
                        );

                        return (
                            <FormControlLabel control={<Radio/>} label={textInput} value={choice.name} key={i}/>
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
    step: number,
    norange?: boolean,
    text_options?: Array<string>
    marks?: boolean
}


interface SliderMark {
    value: number,
    label: string,
}


function SliderInputComponent(props: OptionProps) {

    const config = props.question.sliderconfig as SliderConfig;
    const [sliderVal, setSliderVal] = useState(0);
    function valuetext(value: number) {
        return config.text_options ? config.text_options[value] : `${value}`;
    }

    function handleChange(e: any, newValue: number | number[]) {
        setSliderVal(newValue as number);
    }

    let marks = new Array<SliderMark>();
    for (let i = config.start; i < config.end; ++i) {
        marks.push({
           value: i,
           label: valuetext(i)
        });
    }


    return (
        <Box>
            <Typography gutterBottom>
                {config.norange ? `${valuetext(sliderVal)}` : `${config.start} - ${config.end}`}
                <br />
                <br />
                <br />
                <Slider
                    defaultValue={0}
                    step={config.step}
                    min={config.start}
                    max={config.end}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    aria-labelledby="discrete-slider-always"
                    value={sliderVal}
                    onChange={handleChange}
                    marks={config.marks ? marks : []}

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


function CheckBoxInputComponent(props: OptionProps) {

    return (
        <Box>
            <FormGroup>
                {/*
                //@ts-ignore */}
                {props.question.choices.map((choice, i) => {
                    console.log(typeof choice);
                    if (typeof choice === "string") {
                        return (
                            <FormControlLabel
                                control={< Checkbox/>}
                                label={choice}
                                key={i}
                            />
                        )
                    } else if (choice.type === "textfield") {

                        const textInput = (
                            <TextField style={{width: "100%"}} label={choice.name} key={i}/>
                        );

                        return (
                            <FormControlLabel control={<Checkbox/>} label={textInput} value={choice.name} key={i}/>
                        )
                    }
                    return null;

                })}
            </FormGroup>
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
                        );
                    } else if (question.choicetype === "textfield") {
                        optionsElement = (
                            <TextfieldInputComponent question={question} number={i}/>
                        );
                    } else if (question.choicetype === "slider") {
                        optionsElement = (
                            <SliderInputComponent question={question} number={i}/>
                        );
                    } else if (question.choicetype === "checkboxs") {
                        optionsElement = (
                            <CheckBoxInputComponent question={question} number={i}/>
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

            </Container>
        </div>
    )
}

