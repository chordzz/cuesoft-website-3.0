import { combineReducers } from "redux";
import clientsData from "./clientsData";
import innovationData from "./innovationData";
import productsData from "./productsData";
import approachTwo from "./approach2Data";
import approachData from "./approach";
import teamMembers from "./teamMembers";
import locationData from "./locationData";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  darkMode: function () {
    const hour = new Date().getHours();
    return hour > 18 || hour < 7 ? true : false;
  },
  form: formReducer,
  approachData,
  clientsData,
  innovationData,
  productsData,
  approachTwo,
  teamMembers,
  locationData,
});
