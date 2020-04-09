import React from "react";
import './App.css';
import firebaseConfig from './configs/firebase.json';
import {BrowserRouter as Router} from "react-router-dom";
import pageLinks from "./configs/links.json";
import NavDrawerComponent from "./modules/NavDrawer/NavDrawerComponent";
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
                <NavDrawerComponent pageLinks={pageLinks}/>
                <div className="AppMainComponent">
                    <RouterComponent/>
                </div>

                <div className="AppBottom">
                    <BottomMenuBarComponent/>
                </div>
            </div>
            <SWUpdateSnackbarComponent waitingSW={waitingSW}/>
        </Router>
    )


}

export default App;
