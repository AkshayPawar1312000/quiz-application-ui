import * as api from "../api/index";
import {
  SELECT_QUIZ,
  SEND_QUIZ_SELECTED_OPTIONS,
  SUBMIT_QUIZ_RESULT,
} from "../constant";

// quizAction Redux component manages actions related to quizzes, including fetching quizzes, sending quiz data to the result page, and submitting quiz results.

export const getQuiz = (id, navigate) => async (dispatch) => {
  try {
    const { data } = await api.getQuiz(id);

    dispatch({
      type: SELECT_QUIZ,
      payload: data,
    });
    if (data) {
      navigate(`/quize`);
    }
  } catch (error) {
    console.log(error);
  }
};
export const sendQuizToResultPage =
  (quizSelectedOptions, id, navigate) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_QUIZ_SELECTED_OPTIONS,
        payload: { quizSelectedOptions, id },
      });
      if (quizSelectedOptions) {
        navigate(`/ShowMarks`);
      }
    } catch (error) {
      console.log(error);
    }
  };
export const submitQuizResult =
  (id, quizResult, navigate) => async (dispatch) => {
    try {
      const { data } = await api.submitQuizResult(id, quizResult);
      dispatch({
        type: SUBMIT_QUIZ_RESULT,
        payload: data,
      });
      if (data) {
        navigate(`/leaderBoard`);
      }
    } catch (error) {
      console.log(error);
    }
  };
