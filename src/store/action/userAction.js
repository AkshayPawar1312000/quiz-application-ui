import * as api from "../api/index";
import { POST_USER_DATA, USER_MESSAGE, USER_SINGIN,GET_ALL_USER_RESULT_DATA } from "../constant";

// userActions component handles Redux actions for posting user data, user sign-in, and fetching all user result data.

export const userMessage = (message) => async (dispatch) => {
  try {
    dispatch({
      type: USER_MESSAGE,
      payload: message,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postUserData = (userInfo, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postUserData(userInfo);

    localStorage.setItem("userDetails", JSON.stringify(data?.message));
    dispatch({
      type: POST_USER_DATA,
      payload: data,
    });
    if (data) {
      navigate(`/selectQuiz`);
    }
  } catch (error) {
    console.log(error?.response?.data);
    dispatch(userMessage(error?.response?.data));
  }
};

export const userSingin = (userInfo, navigate) => async (dispatch) => {
  try {
    const { data } = await api.userSingin(userInfo);
    localStorage.setItem("userDetails", JSON.stringify(data?.user));

    dispatch({
      type: USER_SINGIN,
      payload: data,
    });
    if (data) {
      navigate(`/selectQuiz`);
    }
  } catch (error) {
    console.log(error?.response?.data);
    dispatch(userMessage(error?.response?.data));
  }
};

export const getAllUserResultData = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUserResultData();
    dispatch({
      type: GET_ALL_USER_RESULT_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(error?.response)
  }
};
