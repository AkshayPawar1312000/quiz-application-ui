import { combineReducers } from "redux";
import quiz from "./quizReducers";
import user from "./userReducers";


export default combineReducers({
    quiz,
    user
  });