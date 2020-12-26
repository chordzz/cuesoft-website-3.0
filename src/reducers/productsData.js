import ApparuleImg from "../assets/icons/apparule.svg";
import CuepriseImg from "../assets/icons/cueprise.svg";
import CuepayImg from "../assets/icons/cuepay.svg";

const initialState = {
  data: [
    {
      img: ApparuleImg,
      brand: "Apparule",
      desc: "Design Product",
    },
    {
      img: CuepriseImg,
      brand: "Cueprise",
      desc: "Design Product",
    },
    {
      img: CuepayImg,
      brand: "Cuepay",
      desc: "Design Product",
    },
  ],
};

export default function productsData(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
