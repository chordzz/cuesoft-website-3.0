import { combineReducers } from "redux";
import clientsData from "./clientsData";
import innovationData from "./innovationData";
import productsData from "./productsData";
import approachTwo from "./approach2Data";
import approachData from "./approach";
import teamMembers from "./teamMembers";
import locationData from "./locationData";
import darkmodeReducer from "./darkMode";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  darkmodeReducer,
  form: formReducer,
  approachData,
  clientsData,
  innovationData,
  productsData,
  approachTwo,
  teamMembers,
  locationData,
});
