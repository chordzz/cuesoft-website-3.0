import UnileverLight from "../assets/icons/unilever.svg";
import UnileverDark from "../assets/icons/unilever2.svg";
import FerrariLight from "../assets/icons/ferrari.svg";
import FerrariDark from "../assets/icons/ferrari2.svg";
import ClarksLight from "../assets/icons/clarks.svg";
import ClarksDark from "../assets/icons/clarks2.svg";

const initialState = {
  data: [
    {
      lightLogo: UnileverLight,
      darkLogo: UnileverDark,
      body: "Arm yourself with a cutting edge website built to fit your needs today and to grow along with your organization",
    },
    {
      lightLogo: FerrariLight,
      darkLogo: FerrariDark,
      body: "Arm yourself with a cutting edge website built to fit your needs today and to grow along with your organization",
    },
    {
      lightLogo: ClarksLight,
      darkLogo: ClarksDark,
      body: "Arm yourself with a cutting edge website built to fit your needs today and to grow along with your organization",
    },
  ],
};

export default function clients(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
