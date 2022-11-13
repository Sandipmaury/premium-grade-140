import axios from "axios";
import * as way from "./actionType";
import { IS_AUTH_FAILURE, IS_AUTH_SUCCESS } from "./actionType";

const URL = process.env.REACT_APP_URL;

export const SignupData = (post) => async (dispatch) => {
  // console.log('action:',post)
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
    // console.log(data)
    dispatch({ type: way.SIGNUP_SUCCESS, payload: data });
    return data.success;
  } catch (error) {
    console.log(error);
    return false;
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
    // console.log(data)
    dispatch({ type: way.LOGIN_SUCCESS, payload: data });
    const success = data.success;
    const token = data.data.token;
    return { success, token };
  } catch (error) {
    console.log(error);
  }
};

export const removeToken = async () => {
  try {
    return await localStorage.removeItem("Token");
  } catch (err) {
    console.log(err);
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

    console.log(err);
  }
};

export const userLogOut = () => async (dispatch) => {
  try {
    await removeToken();
    dispatch({ type: IS_AUTH_FAILURE, payload: {} });
  } catch (err) {
    console.log(err);
  }
};
