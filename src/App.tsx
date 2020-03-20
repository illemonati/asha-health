import React from 'react';
import './App.css';
import SurveyComponent from "./modules/Survey/SurveyComponent";
import questions from './configs/questions.json'

function App() {
  return (
    <div className="App">
      <SurveyComponent questions={questions}/>
    </div>
  );
}

export default App;
