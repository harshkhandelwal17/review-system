import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetSurvey } from '../redux/surveySlice';

function ThankYouScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(resetSurvey());
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-600">Your feedback has been submitted.</p>
      </div>
    </div>
  );
}

export default ThankYouScreen;