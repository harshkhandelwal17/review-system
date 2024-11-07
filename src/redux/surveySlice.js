import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestion: -1,
  isCompleted: false,
  questions: [
    { id: 1, text: 'How satisfied are you with our products?', type: 'rating', scale: 5 },
    { id: 2, text: 'How fair are the prices compared to similar retailers?', type: 'rating', scale: 5 },
    { id: 3, text: 'How satisfied are you with the value for money of your purchase?', type: 'rating', scale: 5 },
    { id: 4, text: 'On a scale of 1-10 how would you recommend us to your friends and family?', type: 'rating', scale: 10 },
    { id: 5, text: 'What could we do to improve our service?', type: 'text' },
  ],
  answers: {},
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    startSurvey(state) {
      state.currentQuestion = 0;
    },
    nextQuestion(state) {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
      }
    },
    prevQuestion(state) {
      if (state.currentQuestion > 0) {
        state.currentQuestion -= 1;
      }
    },
    answerQuestion(state, action) {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    completeSurvey(state) {
      state.isCompleted = true;
    },
    resetSurvey(state) {
      state.currentQuestion = -1;
      state.isCompleted = false;
      state.answers = {};
    },
  },
});

export const { startSurvey, nextQuestion, prevQuestion, answerQuestion, completeSurvey, resetSurvey } = surveySlice.actions;
export default surveySlice.reducer;
