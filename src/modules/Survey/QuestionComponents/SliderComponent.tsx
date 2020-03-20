import {SliderConfig, SliderMark} from "../QuestionsFormat";
import React, {useEffect, useState} from "react";
import {Box, Slider, Typography} from "@material-ui/core";
import {OptionProps} from "./OptionProps";


export default function SliderInputComponent(props: OptionProps) {

    const config = props.question.slider_config as SliderConfig;
    const [sliderVal, setSliderVal] = useState(config.start);
    function valuetext(value: number) {
        return config.text_options ? config.text_options[value] : `${value}`;
    }

    function handleChange(e: any, newValue: number | number[]) {
        setSliderVal(newValue as number);
    }

    let marks = new Array<SliderMark>();
    for (let i = config.start; i < config.end+1; ++i) {
        marks.push({
            value: i,
            label: valuetext(i)
        });
    }

    const makeCallback = () => {
        props.setResultCallback({
            question_number: props.number,
            choice_type: props.question.choice_type,
            slider_value: sliderVal
        })
    };

    useEffect(() => {
        makeCallback()
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        makeCallback()
        //eslint-disable-next-line
    }, [sliderVal]);


    return (
        <Box>
            <Typography gutterBottom>
                {config.no_range ? `${valuetext(sliderVal)}` : `${config.start} - ${config.end}`}
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
