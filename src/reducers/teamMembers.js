import Face1 from "../assets/icons/face1.svg";
import Face2 from "../assets/icons/face2.svg";
import Face3 from "../assets/icons/face3.svg";
import Face4 from "../assets/icons/face4.svg";
import Face5 from "../assets/icons/face5.svg";
import Face6 from "../assets/icons/face6.svg";
import Face7 from "../assets/icons/face7.svg";
import Face8 from "../assets/icons/face8.svg";

const initialState = {
  data: [
    {
      img: Face1,
      name: "Ibukun Dairo",
      title: "Founder and CEO",
    },
    {
      img: Face2,
      name: "Ibukun Dairo",
      title: "Developer",
    },
    {
      img: Face3,
      name: "Ibukun Dairo",
      title: "Graphic Designer",
    },
    {
      img: Face4,
      name: "Ibukun Dairo",
      title: "Project Manager",
    },
    {
      img: Face5,
      name: "Ibukun Dairo",
      title: "Content Writer",
    },
    {
      img: Face6,
      name: "Ibukun Dairo",
      title: "UI/UX Designer",
    },
    {
      img: Face7,
      name: "Ibukun Dairo",
      title: "Motion Designer",
    },
    {
      img: Face8,
      name: "Ibukun Dairo",
      title: "Flutter Developer",
    },
  ],
};

export default function teamMembers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
