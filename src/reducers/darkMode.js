import { DARK_MODE } from "../actions";

const initialState = {
  darkMode: false,
};

const darkmodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default darkmodeReducer;
