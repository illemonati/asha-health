import {Box, TextField} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {OptionProps} from "./OptionProps";

export default function TextfieldInputComponent(props: OptionProps) {

    const [val, setVal] = useState("");

    const makeCallback = () => {
        props.setResultCallback({
            questionNumber: props.number,
            choiceType: props.question.choiceType,
            textInputValue: val
        });
    };

    useEffect(() => {
        makeCallback();
        //eslint-disable-next-line
    }, [val]);

    useEffect(() => {
        makeCallback();
        //eslint-disable-next-line
    }, []);


    return (
        <Box>
            <TextField multiline style={{width: "100%"}}
                       label={props.question.textfieldLabel || "answer"} value={val}
                       required={props.question.required}
                       onChange={e => setVal(e.target.value)} />
        </Box>
    )
}
