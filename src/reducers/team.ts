import Face1 from "../assets/icons/face1.svg";
import Face2 from "../assets/icons/face2.svg";
import Face3 from "../assets/icons/face3.svg";
import Face4 from "../assets/icons/face4.svg";
import Face5 from "../assets/icons/face5.svg";
import Face6 from "../assets/icons/face6.svg";
import Face7 from "../assets/icons/face7.svg";
import { TeamAction, TeamState } from "../types/reducerTypes";

const initialState = {
  data: [
    {
      photo: Face1,
      name: "Ibukun Dairo",
      title: "CEO",
    },
    {
      photo: Face2,
      name: "Mubin Sheidu",
      title: "COO",
    },
    {
      photo: Face3,
      name: "Adeoluwa Apata",
      title: "CTO",
    },
    {
      photo: Face4,
      name: "Segun Adeyemi",
      title: "CMO",
    },
    {
      photo: Face5,
      name: "Ayanfe Oluyomi",
      title: "CRO",
    },
    {
      photo: Face6,
      name: "Ayodele Owoetoni",
      title: "Product Designer",
    },
    {
      photo: Face3,
      name: "Toluwalase Adeniyi",
      title: "Head of People",
    },
    {
      photo: Face7,
      name: "Norbert Aburime",
      title: "Marketing Manager",
    },
    {
      photo: Face2,
      name: "Opeyemi Oluleye",
      title: "Accountant",
    },
    {
      photo: Face1,
      name: "Oluwasegun Esho",
      title: "Software Engineer",
    },
    {
      photo: Face7,
      name: "Olaife Olawore",
      title: "Frontend Engineer",
    },
    {
      photo: Face1,
      name: "Joel Inaku",
      title: "Backend Engineer",
    },
  ],
};

export default function team(
  state: TeamState = initialState,
  action: TeamAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
