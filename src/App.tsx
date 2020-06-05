import React from 'react';
import './App.css';
import firebaseConfig from './configs/firebase.json';
import { BrowserRouter as Router } from 'react-router-dom';
import pageLinks from './configs/links.json';
import NavDrawerComponent from './modules/NavDrawer/NavDrawerComponent';
import { Box, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SWUpdateSnackbarComponent from './modules/SWUpdateSnackbar/SWUpdateSnackbarComponent';
import { initFirebase } from './firebase/auth';
import BottomMenuBarComponent from './modules/BottomMenuBar/BottomMenuBarComponent';
import RouterComponent from './Router';
import SystemConfigurations from './utils/SystemConfigurations';

function App() {
    const waitingSW = useSelector<any, ServiceWorker | null>(
        (state) => state.waitingSW
    );
    const systemConfigurations = useSelector<any, SystemConfigurations>(
        (state) => state.systemConfigurations
    );

    const theme = createMuiTheme({
        palette: {
            type: systemConfigurations.darkMode ? 'dark' : 'light',
            primary: {
                main: '#039be5',
            },
        },
    });

    if (systemConfigurations.darkMode) {
        document.body.style.backgroundColor = '#212121';
        document.body.style.color = '#ffffff';
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#212121';
    }

    initFirebase(firebaseConfig);
    return (
        <ThemeProvider theme={theme}>
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Box className="AppBox">
                        <NavDrawerComponent pageLinks={pageLinks} />
                        <div className="AppMainComponent">
                            <RouterComponent />
                        </div>
                        <br />
                        <br />
                        <br />
                        <BottomMenuBarComponent />
                    </Box>
                </div>
                <SWUpdateSnackbarComponent waitingSW={waitingSW} />
            </Router>
        </ThemeProvider>
    );
}

export default App;
