import * as way from "./actionType";
import { initialState } from "./initialState";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case way.IS_AUTH_LODING:
      return {
        ...state,
        isLoding: true,
      };

    case way.IS_AUTH_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        isAuth: true,
        isError: false,
        isLoding: false,
      };

    case way.IS_AUTH_FAILURE:
      return {
        ...state,
        userDetails: {},
        isAuth: false,
        isLoding: false,
        isError: true,
      };
    case way.LOGIN_LODING:
      return {
        ...state,
        isLoding: true,
      };

    case way.LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        isAuth: true,
        isError: false,
        isLoding: false,
      };

    case way.LOGIN_FAILURE:
      return {
        ...state,
        userDetails: {},
        isAuth: false,
        isLoding: false,
        isError: true,
      };

    case way.SIGNUP_LODING:
      return {
        ...state,
        isLoading: true,
      };

    case way.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userDetails: payload,
      };

    case way.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        userDetails: {},
      };
    default:
      return state;
  }
};
