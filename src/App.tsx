import React from 'react';
import './App.css';
import SurveyComponent from "./modules/Survey/SurveyComponent";
import questions from './configs/questions.json';
import firebaseConfig from './configs/firebase.json';
import {getFirebaseFirestoreDB} from "./firebase/auth";

function App() {

    const db = getFirebaseFirestoreDB(firebaseConfig);

    return (
    <div className="App">
      <SurveyComponent questions={questions} db={db} dbCollectionName={'demo-survey-0'}/>
    </div>
    );
}

export default App;
