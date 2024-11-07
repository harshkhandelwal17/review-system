import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion, nextQuestion, prevQuestion, completeSurvey } from '../redux/surveySlice';

function SurveyScreen() {
  const dispatch = useDispatch();
  const { questions, currentQuestion, answers } = useSelector((state) => state.survey);
  const question = questions[currentQuestion];


  const handleAnswer = (value) => {
    dispatch(answerQuestion({ questionId: question.id, answer: value }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      dispatch(prevQuestion());
    }
  };
  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      dispatch(completeSurvey());
    } else {
      dispatch(nextQuestion());
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Question {currentQuestion + 1} / {questions.length}
      </h2>
      <p className="text-lg text-gray-700 mb-6">{question.text}</p>

      {question.type === 'rating' ? (
        <div className="flex justify-center gap-4 mb-6">
          {[...Array(question.scale)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handleAnswer(index + 1)}
              className={`px-4 py-2 rounded-full font-semibold ${
                answers[question.id] === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-800 hover:bg-blue-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      ) : (
        <textarea
          value={answers[question.id] || ''} required
          onChange={(e) => handleAnswer(e.target.value)}
          className="border rounded p-2 w-full h-24 mb-4"
        />
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default SurveyScreen;
