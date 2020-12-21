import { combineReducers } from "redux";
import approach from "./approach";

export default combineReducers({
  darkMode: function () {
    const hour = new Date().getHours();
    return hour > 18 || hour < 7 ? true : false;
  },
  approach,
});
