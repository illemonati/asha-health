import React, {ChangeEvent, useEffect, useState} from "react";
import {Box, FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import {OptionProps} from "./OptionProps";

export default function OptionsComponent(props: OptionProps) {
    const question = props.question;
    const questionNumber = props.number;
    const setResultCallback = props.setResultCallback;
    const [value, setValue] = useState(props.question.choices![0]);
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue((e.target as HTMLInputElement).value);
    };

    const makeCallback = () => {
        setResultCallback({
            question_number: questionNumber,
            choice_type: question.choice_type,
            choice: value
        })
    };


    useEffect(() => {
        makeCallback();
        // eslint-disable-next-line
    }, []);


    useEffect(() => {
        makeCallback();
        // eslint-disable-next-line
    }, [value]);

    return (
        <Box>
            <RadioGroup aria-label="Choices" value={value} onChange={changeHandler}>
                {question.choices!.map((choice, i) => {
                    if (typeof choice === "string") {
                        return (
                            <FormControlLabel control={<Radio />} label={choice} value={choice} key={i}/>
                        )
                    } else if (choice.type === "textfield") {

                        const textInput = (
                            <TextField style={{width: "100%"}} multiline label={choice.name} disabled={value !== choice.name} key={i} />
                        );

                        return (
                            <FormControlLabel control={<Radio/>} style={{width: "100%"}} label={textInput} value={choice.name} key={i}/>
                        )
                    }
                    return null;

                })}
            </RadioGroup>
        </Box>
    )
}
