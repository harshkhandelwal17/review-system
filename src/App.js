import React from 'react';
import { useSelector } from 'react-redux';
import WelcomeScreen from './components/Welcome';
import SurveyScreen from './components/Survey';
import ThankYouScreen from './components/Thankmsg';

function App() {
  const { isCompleted, currentQuestion, questions } = useSelector((state) => state.survey);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isCompleted ? (
        <ThankYouScreen />
      ) : currentQuestion === -1 ? (
        <WelcomeScreen />
      ) : (
        <SurveyScreen />
      )}
    </div>
  );
}

export default App;
