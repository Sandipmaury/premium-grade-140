import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as MealDataReducer } from "./MealDealsReducer/reducer";
import thunk from "redux-thunk";
import { recipeReducer } from "./RecipeReducer/recipe.reducer";
import { momentReducer } from "./MomentReducer/moment.reducer";

const root = combineReducers({
  AuthReducer,
  recipeReducer,
  momentReducer,
  MealDataReducer,
});
const store = legacy_createStore(root, applyMiddleware(thunk));
export default store;
