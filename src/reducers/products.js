import Apparule from "../assets/icons/apparule.svg";
import Cueprise from "../assets/icons/cueprise.svg";
import Cuepay from "../assets/icons/cuepay.svg";

const initialState = {
  data: [
    {
      banner: Apparule,
      name: "Apparule",
      description: "Design Product",
    },
    {
      banner: Cueprise,
      name: "Cueprise",
      description: "Design Product",
    },
    {
      banner: Cuepay,
      name: "Cuepay",
      description: "Design Product",
    },
  ],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
