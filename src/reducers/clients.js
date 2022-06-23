import FinchGlowTravelsLight from "../assets/icons/finch_glow_travels_logo.svg";
import FinchGlowTravelsDark from "../assets/icons/finch_glow_travels_logo2.svg";
import UmobileNGLight from "../assets/icons/umobile_ng_logo.svg";
import UmobileNGDark from "../assets/icons/umobile_ng_logo2.svg";
import SycamoreNGLight from "../assets/icons/sycamore_ng_logo.svg";
import SycamoreNGDark from "../assets/icons/sycamore_ng_logo2.svg";

const initialState = {
  data: [
    {
      lightLogo: FinchGlowTravelsLight,
      darkLogo: FinchGlowTravelsDark,
      body: "Finchglow Travels is a Travel Management Company that provide efficient travel solutions for personal and business travel needs; ranging from travel consultations, ticketing & reservations, tours, airport transfer and consular services.",
    },
    {
      lightLogo: UmobileNGLight,
      darkLogo: UmobileNGDark,
      body: "Umobile.ng is an application based Driver Hailing platform connecting car owners to verified, well-equipped drivers.",
    },
    {
      lightLogo: SycamoreNGLight,
      darkLogo: SycamoreNGDark,
      body: "Manage and track the money you lend your friends and family with ease. All in one app: Get loans, Lend friends, Pay Bills, and Invest.",
    },
  ],
};

export default function clients(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
