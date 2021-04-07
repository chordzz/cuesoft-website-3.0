import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import approach from "./approach";
import about from "./about";
import team from "./team";
import products from "./products";
import clients from "./clients";
import contact from "./contact";
import mode from "./mode";
import termsData from "./terms";
import privacyData from "./privacy";

export default combineReducers({
  form,
  approach,
  about,
  team,
  products,
  clients,
  contact,
  mode,
  termsData,
  privacyData,
});
