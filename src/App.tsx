import React from 'react';
import './App.css';
import SurveyComponent from "./modules/Survey/SurveyComponent";
import questions from './configs/questions.json';
import firebaseConfig from './configs/firebase.json';
import {getFirebase} from "./firebase/auth";

function App() {

    const firebase = getFirebase(firebaseConfig);

    return (
    <div className="App">
      <SurveyComponent questions={questions} firebase={firebase} dbCollectionName={'demo-survey-0'}/>
    </div>
    );
}

export default App;
