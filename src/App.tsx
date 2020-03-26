import React from 'react';
import './App.css';
import SurveyComponent from "./modules/Survey/SurveyComponent";
import questions from './configs/questions.json';
import firebaseConfig from './configs/firebase.json';
import {getFirebase} from "./firebase/auth";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RiskCalculatorComponent from "./modules/RiskCalculator/RiskCalculatorComponent";
import HomePageComponent from "./modules/HomePage/HomePageComponent";
import pageLinks from "./configs/links.json";
import riskCalculatorConfig from './configs/riskCalculatorConfig.json';
import NavDrawerComponent from "./modules/NavDrawer/NavDrawerComponent";


function App() {

    const firebase = getFirebase(firebaseConfig);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <NavDrawerComponent pageLinks={pageLinks}/>
                <br />
                <br />
                    <Switch>
                        <Route path="/survey">
                            <SurveyComponent questions={questions} firebase={firebase} dbCollectionName={'demo-survey-0'} />
                        </Route>
                        <Route path="/risk-calculator">
                            <RiskCalculatorComponent fields={riskCalculatorConfig}/>
                        </Route>
                        <Route path="/" exact>
                            <HomePageComponent pageLinks={pageLinks}/>
                        </Route>
                    </Switch>
            </div>
        </Router>
    )


}

export default App;
