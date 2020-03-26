import React, {useState} from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {RiskCalculatorFieldResult, RiskCalculatorFields} from "./RiskCalculatorFormat";
import RiskCalculatorConfigComponent from "./Configuration/RiskCalculatorConfigComponent";
import './styles.css';


interface RiskCalculatorComponentProps {
    fields: RiskCalculatorFields
}

export default function RiskCalculatorComponent(props: RiskCalculatorComponentProps) {

    //eslint-disable-next-line
    const [configs, setConfigs] = useState([] as RiskCalculatorFieldResult[]);

    const handleConfigCallback = (result: RiskCalculatorFieldResult) => {
        setConfigs(prevState => {
           prevState[result.field.fieldNumber] = result;
           return prevState;
        });
    };




    return (
        <div className="RiskCalculatorComponent">
            <Typography variant='h5'>
                Risk Calculator for Total Knee or Hip Arthoplasty Based on VA VASQIP Data
            </Typography>
            <br />
            <br />
            <Box maxHeight="50%" className="containerBox" flexWrap="nowrap">
                <Grid container spacing={1} className="mainGrid">
                    <Grid item xs={3} className="configGrid">
                        <RiskCalculatorConfigComponent fields={props.fields} callBack={handleConfigCallback}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography>Hi2</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}



