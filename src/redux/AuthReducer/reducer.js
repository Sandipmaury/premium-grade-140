import * as way from "./actionType";
import { initialState } from "./initialState";

export const reducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case way.LOGIN_LODING:
      return {
        ...state,
        isLoding: true,
      }


    case way.LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: payload,
        // isAuth: true,
        isError: false,
        isLoding: false,
      }

    case way.LOGIN_FAILURE:
      return {
        ...state,
        userDetails: payload,
        // isAuth: false,
        isLoding: false,
        isError: true,
      }



      case way.SIGNUP_LODING:
        return {
          ...state,
          isLoding:true,
        };

        case way.SIGNUP_SUCCESS:
          console.log('Success:',payload)
          return {
            ...state,
            isLoding:false,
            isError:false,
            register:payload
          }

          case way.SIGNUP_FAILURE:
            return {
              ...state,
              isLoding:false,
              isError:true,

            }
    default:
      return state;
  }
};
