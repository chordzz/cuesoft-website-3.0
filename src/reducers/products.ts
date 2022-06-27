import Apparule from "../assets/images/apparule.webp";
import Cueprise from "../assets/images/cueprise.webp";
import Cuepay from "../assets/images/cuepay.webp";
import { ProductAction, ProductState } from "../types/reducerTypes";

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

export default function products(
  state: ProductState = initialState,
  action: ProductAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
