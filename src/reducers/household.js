import Kasper from "../assets/images/frame1.webp";
import Tom from "../assets/images/frame2.webp";
import Richard from "../assets/images/frame3.webp";

const initialState = {
  data: [
    {
      avatar: Kasper,
      quote: `"Being back with Cuesoft just gives me peace of mind knowing that my technology is functioning seamlessly behind
            the scenes without it interfering with and disrupting our day-to-day operations."`,
      name: "Kasper Vardrup",
      title: "Experience Design & Innovation leader at Progressive Insurance ",
    },
    {
      avatar: Tom,
      quote: `"We've done user testing and focus groups for the designs created by Balkan Brothers. The results show that, nine
            times of ten, their working is outstanding."`,
      name: "Tom Nolan",
      title: "Founder and Partner at Rainmaking",
    },
    {
      avatar: Richard,
      quote: `"We've done user testing and focus groups for the designs created by Balkan Brothers. The results show that, nine
            times of ten, their working is outstanding."`,
      name: "Richard Caleb",
      title: "Founder and Partner at Rainmaking",
    },
  ],
};

export default function household(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
