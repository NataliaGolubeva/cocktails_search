import { combineReducers } from "redux";
import counterReducer from "./counter";
import cocktailReducer from "./cocktails";

export default combineReducers({
  counter: counterReducer,
  cocktails: cocktailReducer,
});
