import UnileverImg from "../icons/home/unilever.svg";
import UnileverImg2 from "../icons/home/unilever2.svg";
import FerrariImg from "../icons/home/ferrari.svg";
import FerrariImg2 from "../icons/home/ferrari2.svg";
import ClarksImg from "../icons/home/clarks.svg";
import ClarksImg2 from "../icons/home/clarks2.svg";
const initialState = {
  data: [
    {
      img1: UnileverImg,
      img2: UnileverImg2,
      info: `Arm yourself with a cutting edge website built to fit your needs today and to grow along
            with your organization`,
    },
    {
      img1: FerrariImg,
      img2: FerrariImg2,
      info: `Arm yourself with a cutting edge website built to fit your needs today and to grow along
            with your organization`,
    },
    {
      img1: ClarksImg,
      img2: ClarksImg2,
      info: `Arm yourself with a cutting edge website built to fit your needs today and to grow along
            with your organization`,
    },
  ],
};

export default function clientsData(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}