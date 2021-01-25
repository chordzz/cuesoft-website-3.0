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
      photo: Face1,
      name: "Ibukun Dairo",
      title: "Founder and CEO",
    },
    {
      photo: Face2,
      name: "Ibukun Dairo",
      title: "Developer",
    },
    {
      photo: Face3,
      name: "Ibukun Dairo",
      title: "Graphic Designer",
    },
    {
      photo: Face4,
      name: "Ibukun Dairo",
      title: "Project Manager",
    },
    {
      photo: Face5,
      name: "Ibukun Dairo",
      title: "Content Writer",
    },
    {
      photo: Face6,
      name: "Ibukun Dairo",
      title: "UI/UX Designer",
    },
    {
      photo: Face7,
      name: "Ibukun Dairo",
      title: "Motion Designer",
    },
    {
      photo: Face8,
      name: "Ibukun Dairo",
      title: "Flutter Developer",
    },
  ],
};

export default function team(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
