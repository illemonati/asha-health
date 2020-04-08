import * as React from 'react';
import LifeStyleComponent from "./modules/LifeStyle/LifeStyleComponent";
import HealthComponent from "./modules/Health/HealthComponent";
import SettingsComponent from "./modules/Settings/SettingsComponent";
import LifeStyleResourcesComponent from "./modules/LifeStyle/LifeStyleResources/LifeStyleResourcesComponent";
import NearMeComponent from "./modules/Health/NearMe/NearMeComponent";
import riskCalculatorConfigs from './configs/riskCalculatorConfig.json';
import RiskCalculatorComponent from "./modules/RiskCalculator/RiskCalculatorComponent";
import HomePageComponent from "./modules/HomePage/HomePageComponent";
import SurveyComponent from "./modules/Survey/SurveyComponent";
import questions from './configs/questions.json';
import {Switch, Route} from "react-router-dom";
import pageLinks from "./configs/links.json";
import MyProfileComponent from './modules/Settings/MyProfile/MyProfileComponent';


export default function RouterComponent() {
  return (
    <>
        <Switch>
            {/* Demo Survey */}
            <Route path="/survey" excat>
                <SurveyComponent questions={questions} dbCollectionName={'demo-survey-0'} />
            </Route>
            
            {/* Demo Calculator */}
            <Route path="/risk-calculator" exact>
                <RiskCalculatorComponent configs={riskCalculatorConfigs}/>
            </Route>
            
            {/* LifeStyle Routes */}
            <Route path="/lifestyle" exact>
                <LifeStyleComponent/>
            </Route>
            <Route path="/lifestyle/resources" exact>
                <LifeStyleResourcesComponent />
            </Route>

            {/* Health Routes */}
            <Route path="/health" exact>
                <HealthComponent/>
            </Route>
            <Route path="/health/near-me" exact>
                <NearMeComponent/>
            </Route>

            {/* Settings Routes */}
            <Route path="/settings" exact>
                <SettingsComponent/>
            </Route>
            <Route path="/my-profile" exact>
                <MyProfileComponent />
            </Route>

            {/* HomePage */}
            <Route path="/" exact>
                <HomePageComponent pageLinks={pageLinks}/>
            </Route>
        </Switch>
    </>
  );
}
