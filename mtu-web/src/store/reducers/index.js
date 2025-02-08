import { combineReducers } from "redux";
import userReducer from "./user";
import itemReducer from "./item";
import reminderReducer from "./reminder";

const rootReducer = combineReducers({
  user: userReducer,
  item: itemReducer,
  reminder: reminderReducer,
});

export default rootReducer;
