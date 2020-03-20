import {Box, TextField} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {OptionProps} from "./OptionProps";

export default function TextfieldInputComponent(props: OptionProps) {

    const [val, setVal] = useState("");

    const makeCallback = () => {
        props.setResultCallback({
            question_number: props.number,
            choice_type: props.question.choice_type,
            text_input_value: val
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
            <TextField multiline style={{width: "100%"}} label="answer" value={val} onChange={e => setVal(e.target.value)} />
        </Box>
    )
}
