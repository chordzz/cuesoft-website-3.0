import { combineReducers } from "redux";
import approach from "./approach";
import about from "./about";
import team from "./team";
import products from "./products";
import clients from "./clients";
import contact from "./contact";
import mode from "./mode";
import household from "./household";
import footerDetails from "./footerDetails";

export default combineReducers({
  approach,
  about,
  team,
  products,
  clients,
  contact,
  mode,
  household,
  footerDetails,
});