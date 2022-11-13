import * as types from "./actionType";
import axios from "axios";

const URL = process.env.REACT_APP_URL;

const getMealData = (params) => async (dispatch) => {
  dispatch({ type: types.MEAL_DATA_REQUEST });
  return axios
    .get(`${URL}/meals`, {
      headers: {
        token: localStorage.getItem("Token"),
      },
      params: params,
    })
    .then((res) => {
      dispatch({ type: types.MEAL_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.MEAL_DATA_FAILURE, payload: err });
    });
};

export { getMealData };
