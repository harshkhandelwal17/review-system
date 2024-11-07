import React from 'react';
import { useDispatch } from 'react-redux';
import { startSurvey } from '../redux/surveySlice';

function WelcomeScreen() {
  const dispatch = useDispatch();

  return (
    <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome!</h1>
      <p className="text-lg text-gray-700 mb-6">We value your feedback. Please take a moment to complete our survey.</p>
      <button
        onClick={() => dispatch(startSurvey())}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Start Survey
      </button>
    </div>
  );
}

export default WelcomeScreen;
