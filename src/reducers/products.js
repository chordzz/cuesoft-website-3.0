import Apparule from "../assets/images/apparule.webp";
import Cueprise from "../assets/images/cueprise.webp";
import Cuepay from "../assets/images/cuepay.webp";

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
