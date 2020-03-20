import {Box, Checkbox, FormControlLabel, FormGroup, TextField} from "@material-ui/core";
import React, {ChangeEvent, useEffect, useState} from "react";
import {OptionProps} from "./OptionProps";
import {ChoiceType} from "../QuestionsFormat";


export default function CheckBoxsInputComponent(props: OptionProps) {
    const [choices, setChoices] = useState([] as Array<string | ChoiceType>);
    const [extraInfo, setExtraInfo] = useState("");


    const textFieldChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setExtraInfo(e.target.value);
    };

    const makeCallback = () => {
        props.setResultCallback({
            question_number: props.number,
            choice_type: props.question.choice_type,
            choices: choices,
            extra_info: extraInfo.length > 0 ? extraInfo : undefined
        });
    };

    useEffect(() => {
        makeCallback();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        makeCallback();
        // eslint-disable-next-line
    }, [choices]);



    const handleChange = (e: ChangeEvent<HTMLInputElement>, choice: string | ChoiceType) => {
        let c = choices.slice();
        if (e.target.checked) {
            if (!c.includes(choice)) {
                c.push(choice)
            }
        } else {
            c = c.filter((val, i) => val !== choice);
        }
        setChoices(c);
    };

    return (
        <Box>
            <FormGroup>
                {props.question.choices!.map((choice, i) => {
                    if (typeof choice === "string") {
                        return (
                            <FormControlLabel
                                control={< Checkbox onChange={(e) => handleChange(e, choice)}/>}
                                label={choice}
                                key={i}
                            />
                        )
                    } else if (choice.type === "textfield") {

                        const textInput = (
                            <TextField style={{width: "100%"}} multiline label={choice.name} key={i} onChange={textFieldChangeHandler}/>
                        );

                        return (
                            <FormControlLabel control={<Checkbox onChange={(e) => handleChange(e, choice)}/>} label={textInput} value={choice.name} key={i}/>
                        )
                    }
                    return null;

                })}
            </FormGroup>
        </Box>
    )


}
