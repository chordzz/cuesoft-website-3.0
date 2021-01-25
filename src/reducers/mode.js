import { CHANGE_MODE } from "../constants";

const initialState = {
  darkMode: false,
};

export default function mode(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
