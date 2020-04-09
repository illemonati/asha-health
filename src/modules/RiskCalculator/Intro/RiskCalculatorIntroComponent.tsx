import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Container,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    Step,
    StepButton,
    Stepper,
    Typography
} from "@material-ui/core";
import './styles.css';
import SwipeableViews from "react-swipeable-views";


interface RiskCalculatorIntroComponentProps {
    open: boolean,
    setOpen: (open: boolean) => any
}


function AllDoneScreen() {
    return (
        <>
            <DialogTitle>
                All Done!
            </DialogTitle>
            <DialogContent>
            </DialogContent>
        </>
    )
}

function WelcomeScreen() {
    return (
        <>
            <DialogTitle>
                Welcome To the Risk Calculator
            </DialogTitle>
            <DialogContent>
            </DialogContent>
        </>
    )
}

function InfoScreen() {
    return (
        <>
            <DialogTitle>
                Information
            </DialogTitle>
            <DialogContent>
                <Typography variant="subtitle1">
                    This calculator is designed to measure your risks for the next 30 days.
                </Typography>
                <Typography variant="subtitle1">
                    Please fill in all Fields as best as you can.
                </Typography>
                <Typography variant="subtitle1">
                    Thank you
                </Typography>
            </DialogContent>
        </>
    )
}



export default function RiskCalculatorIntroComponent(props: RiskCalculatorIntroComponentProps) {
    const [activeStep, setActiveStep] = useState(0);
    const open = props.open;
    const setOpen = props.setOpen;
    const steps = {
        "Welcome": (<WelcomeScreen/>),
        "Info": (<InfoScreen />),
        "All Done": (<AllDoneScreen/>)
    } as {[key: string] : JSX.Element};

    const handleStepChange = (stepNumber: number) => {
        setActiveStep(stepNumber);
    };

    const [nextButton, setNextButton] = useState<null | JSX.Element>(null);

    useEffect(() => {
        if (activeStep < Object.keys(steps).length-1) {
            setNextButton(
                <Button variant="outlined" color="primary" onClick={() => setActiveStep(step => step+1)}>
                    Next
                </Button>
            );
        } else {
            setNextButton(
                <Button variant="outlined" color="primary" onClick={() => {setOpen(false)}}>
                    Close
                </Button>
            );
        }
        // eslint-disable-next-line
    }, [activeStep, setOpen]);

    return (
        <Dialog className="RiskCalculatorIntroComponent" open={open} onClose={() => setOpen(false)} aria-labelledby="Risk Calculator Intro" maxWidth="xl">
            <Stepper nonLinear activeStep={activeStep}>
                {Object.keys(steps).map((stepName, i) => {
                    return (
                        <Step key={i}>
                            <StepButton onClick={() => handleStepChange(i)}>
                                {stepName}
                            </StepButton>
                        </Step>
                    )
                })}
            </Stepper>
            <div>
                <Container>
                    <SwipeableViews index={activeStep}>
                        {Object.keys(steps).map((stepName, i) => {
                            return (
                                <Box key={i} justifyItems="center" justifyContent="center">
                                    {steps[stepName]}
                                </Box>
                            );
                        })}
                    </SwipeableViews>
                    <DialogActions>
                        {nextButton}
                    </DialogActions>
                </Container>
                <br />
                <br />
            </div>
        </Dialog>
    )
}


