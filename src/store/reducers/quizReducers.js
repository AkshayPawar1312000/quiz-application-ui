import { SELECT_QUIZ,SEND_QUIZ_SELECTED_OPTIONS,SUBMIT_QUIZ_RESULT } from "../constant";

// The quizReducer file manages state changes related to quizzes, including fetching quizzes, sending quiz data to the result page,
//  and submitting quiz results through Redux actions.

const quiz = (state = { quiz: null, selectedQuizOptions: null }, action) => {
  switch (action.type) {
    case SELECT_QUIZ:
      return { ...state, quiz: action.payload?.quizData };
    case SEND_QUIZ_SELECTED_OPTIONS:
      return { ...state, selectedQuizOptions: action.payload };
      case SUBMIT_QUIZ_RESULT:
        return{...state, quiz: action.payload}
    default:
      return state;
  }
};

export default quiz;
