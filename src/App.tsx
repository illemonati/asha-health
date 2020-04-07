import React from "react";
import './App.css';
import firebaseConfig from './configs/firebase.json';
import {BrowserRouter as Router} from "react-router-dom";
import pageLinks from "./configs/links.json";
import NavDrawerComponent from "./modules/NavDrawer/NavDrawerComponent";
import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";
import SWUpdateSnackbarComponent from "./modules/SWUpdateSnackbar/SWUpdateSnackbarComponent";
import {initFirebase} from "./firebase/auth";
import BottomMenuBarComponent from "./modules/BottomMenuBar/BottomMenuBarComponent";
import RouterComponent from "./Router";


function App() {

    const waitingSW = useSelector<any, ServiceWorker | null>(state => state.waitingSW);
    initFirebase(firebaseConfig);
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Box>
                    <NavDrawerComponent pageLinks={pageLinks}/>
                    <br />
                    <br />
                    <RouterComponent />
                    <br />
                    <br />
                    <br />
                    <BottomMenuBarComponent/>
                </Box>
            </div>
            <SWUpdateSnackbarComponent waitingSW={waitingSW}/>
        </Router>
    )


}

export default App;
