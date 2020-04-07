import React from "react";
import './App.css';
import SurveyComponent from "./modules/Survey/SurveyComponent";
import questions from './configs/questions.json';
import firebaseConfig from './configs/firebase.json';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RiskCalculatorComponent from "./modules/RiskCalculator/RiskCalculatorComponent";
import HomePageComponent from "./modules/HomePage/HomePageComponent";
import pageLinks from "./configs/links.json";
import riskCalculatorConfigs from './configs/riskCalculatorConfig.json';
import NavDrawerComponent from "./modules/NavDrawer/NavDrawerComponent";
import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";
import SWUpdateSnackbarComponent from "./modules/SWUpdateSnackbar/SWUpdateSnackbarComponent";
import {initFirebase} from "./firebase/auth";
import BottomMenuBarComponent from "./modules/BottomMenuBar/BottomMenuBarComponent";
import LifeStyleComponent from "./modules/LifeStyle/LifeStyleComponent";
import HealthComponent from "./modules/Health/HealthComponent";
import SettingsComponent from "./modules/Settings/SettingsComponent";


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
                    <Switch>
                        <Route path="/survey">
                            <SurveyComponent questions={questions} dbCollectionName={'demo-survey-0'} />
                        </Route>
                        <Route path="/risk-calculator">
                            <RiskCalculatorComponent configs={riskCalculatorConfigs}/>
                        </Route>
                        <Route path="/lifestyle">
                            <LifeStyleComponent/>
                        </Route>
                        <Route path="/health">
                            <HealthComponent/>
                        </Route>
                        <Route path="/settings">
                            <SettingsComponent/>
                        </Route>
                        <Route path="/" exact>
                            <HomePageComponent pageLinks={pageLinks}/>
                        </Route>
                    </Switch>
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
