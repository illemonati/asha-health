import React, { useState, ChangeEvent, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Switch } from '@material-ui/core';
import SystemConfigurations from '../../../utils/SystemConfigurations';
import { useDispatch, useSelector } from 'react-redux';
import { updateSystemConfigurations } from '../../../actions/systemConfigurations';

export default function SystemConfigurationComponent() {
    const dispatch = useDispatch();
    const [systemConfigurations, setSystemConfigurations] = useState(
        useSelector<any, SystemConfigurations>(
            (state) => state.systemConfigurations
        )
    );
    const handleDarkModeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.checked;
        setSystemConfigurations((sc) => {
            sc.darkMode = newValue;
            return { ...sc };
        });
    };

    useEffect(() => {
        dispatch(updateSystemConfigurations(systemConfigurations));
    }, [systemConfigurations, dispatch]);

    return (
        <div className="SystemConfigurationComponent">
            <Container maxWidth="md">
                <Typography variant="h5">Configurations</Typography>
                <br />
                <br />
                <Paper variant="outlined">
                    <br />
                    <br />
                    <Grid
                        container
                        spacing={3}
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={8}>
                            <Typography>Dark Mode (Recommended)</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Switch
                                checked={systemConfigurations.darkMode}
                                onChange={handleDarkModeChange}
                            ></Switch>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                </Paper>
            </Container>
        </div>
    );
}
