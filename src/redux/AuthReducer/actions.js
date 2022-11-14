import axios from "axios";
import * as way from "./actionType";

const URL = process.env.REACT_APP_URL;

export const SignupData = (post) => async (dispatch) => {
  dispatch({ type: way.SIGNUP_LODING });
  try {
    let res = await fetch(`${URL}/user/register`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    dispatch({ type: way.SIGNUP_SUCCESS, payload: {} });
    return data;
  } catch (error) {
    dispatch({ type: way.SIGNUP_FAILURE, payload: {} });
    return error.response.data;
  }
};

export const Login_Data = (LoginData) => async (dispatch) => {
  dispatch({ type: way.LOGIN_LODING });
  try {
    let res = await fetch(`${URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(LoginData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    await window.localStorage.setItem("Token", data?.data?.token);
    dispatch(getUser());
    return data;
  } catch (error) {
    dispatch({ type: way.LOGIN_SUCCESS, payload: {} });

    return error.response.data;
  }
};

export const removeToken = async () => {
  try {
    return await localStorage.removeItem("Token");
  } catch (err) {
    return null;
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: way.IS_AUTH_LODING });
  try {
    const user = await axios.get(`${URL}/user`, {
      headers: {
        token: localStorage.getItem("Token"),
      },
    });
    dispatch({ type: way.IS_AUTH_SUCCESS, payload: user.data });
  } catch (err) {
    dispatch({ type: way.IS_AUTH_FAILURE });
  }
};

export const userLogOut = () => async (dispatch) => {
  try {
    await removeToken();
    dispatch({ type: way.IS_AUTH_FAILURE, payload: {} });
  } catch (err) {}
};
