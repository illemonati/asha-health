import React, {ChangeEvent, useEffect, useState} from "react";
import {Container, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {RiskCalculatorFieldResult, RiskCalculatorFieldResults, RiskCalculatorFields} from "./RiskCalculatorFormat";
import RiskCalculatorConfigComponent from "./Configuration/RiskCalculatorConfigComponent";
import './styles.css';
import RiskCalculatorResultsComponent from "./Results/RiskCalculatorResultsComponent";


interface RiskCalculatorComponentProps {
    configs: RiskCalculatorFields
}

export default function RiskCalculatorComponent(props: RiskCalculatorComponentProps) {

    //eslint-disable-next-line
    const [inputs, setInputs] = useState([] as RiskCalculatorFieldResult[]);
    const [tabVal, setTabVal] = useState(0);
    let configs = props.configs;

    const handleConfigCallback = (result: RiskCalculatorFieldResult) => {
        setInputs(prevState => {
           prevState[result.field.fieldNumber] = result;
           return prevState;
        });
        localStorage.setItem('risk-calculator-inputs', JSON.stringify(inputs));
    };


    useEffect(() => {
        const savedInputs = localStorage.getItem('risk-calculator-inputs');
        if (savedInputs !== null) {
            const parsedInputs = JSON.parse(savedInputs) as RiskCalculatorFieldResults;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            configs = configs.map((config, i) => {
                config.fieldConfig.default = parsedInputs[i].result;
                return config;
            })
        }
    });


    const handleTabValChange = (e: ChangeEvent<{}>, newVal: number) => {
      setTabVal(newVal);
    };



    return (
        <div className="RiskCalculatorComponent">
            <Typography variant='h5'>
                Risk Calculator for Total Knee or Hip Arthoplasty Based on VA VASQIP Data
            </Typography>
            <br />
            <br />
            <Container className="containerBox">
                <Paper square>
                    <Tabs value={tabVal}
                          onChange={handleTabValChange}
                          className="toggleTabs"
                          centered={true}
                          textColor={"primary"}
                    >
                        <Tab label="Inputs" />
                        <Tab label="results" />
                    </Tabs>
                </Paper>
                {
                    (tabVal === 0) ?
                    (<RiskCalculatorConfigComponent fields={configs} callBack={handleConfigCallback} />)
                        :
                    (<RiskCalculatorResultsComponent inputs={inputs}/>)
                }
            </Container>
        </div>
    )
}



