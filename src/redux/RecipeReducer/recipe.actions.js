import axios from "axios";
import {
  GET_RECIPE_LOADING,
  GET_RECIPE_ERROR,
  GET_RECIPE_SUCCESS,
} from "./recipe.types";

const URL = process.env.REACT_APP_URL;

export const getRecipe = (params) => async (dispatch) => {
  dispatch({ type: GET_RECIPE_LOADING });
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  try {
    let response = await axios.get(`${URL}/recipes`, {
      headers: {
        token: localStorage.getItem("Token"),
      },
      cancelToken: source.token,
      params: params,
    });

    dispatch({ type: GET_RECIPE_SUCCESS, payload: response.data });

    // return response.data.data;
  } catch (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Request canceled", thrown.message);
    } else {
      // handle error
    }
    dispatch({ type: GET_RECIPE_ERROR });
  }
};
