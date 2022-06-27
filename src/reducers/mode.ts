import { CHANGE_MODE } from "../constants";
import { ModeAction, ModeState } from "../types/reducerTypes";

const initialState = {
  darkMode: false,
};

export default function mode(
  state: ModeState = initialState,
  action: ModeAction
) {
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
