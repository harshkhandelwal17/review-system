export const saveAnswersToLocalStorage = (sessionId, answers) => {
    localStorage.setItem(sessionId, JSON.stringify(answers));
  };
  export const getAnswersFromLocalStorage = (sessionId) => {
    return JSON.parse(localStorage.getItem(sessionId)) || {};
  };
  