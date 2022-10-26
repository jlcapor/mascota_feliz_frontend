import { combineReducers } from "redux";
import uiReducer from "./features/ui";
const rootReducer = combineReducers({
  iu: uiReducer,
});

export default rootReducer;
