import {
  POST_USER_DATA,
  USER_MESSAGE,
  USER_SINGIN,
  GET_ALL_USER_RESULT_DATA,
} from "../constant";

// The userReducer file manages state changes related to user actions, including posting user data, user sign-in, and fetching all user result data through Redux actions.

const user = (
  state = { userData: null, userMessage: null, userResult: null },
  action
) => {
  switch (action.type) {
    case POST_USER_DATA:
      return { ...state, userData: action.payload };
    case USER_SINGIN:
      return { ...state, userData: action.payload };
    case USER_MESSAGE:
      return { ...state, userMessage: action.payload };
    case GET_ALL_USER_RESULT_DATA:
      return { ...state, userResult: action.payload?.quizResult };
    default:
      return state;
  }
};

export default user;
