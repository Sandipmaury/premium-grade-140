import * as types from "./actionType";
const initData = {
  mealData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initData, { type, payload }) => {
  switch (type) {
    case types.MEAL_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.MEAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mealData: payload,
      };

    case types.MEAL_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};


export {reducer}