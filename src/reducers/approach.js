// import React from "react";
// import { ReactComponent as Analyse } from "../assets/illustrations/Analyse.svg";
// import Build from "../assets/illustrations/Build.svg";
// import Design from "../assets/illustrations/Design.svg";
// import Evolve from "../assets/illustrations/Evolve.svg";

const initialState = {
  data: [
    {
      title: "01. Analyse",
      summary:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
      body:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated, easy. We like to take your brand back to its absolute essence. What are the questions you like to ask, and why? We like to peel back the onion, and pick your brain for a while. Bold ideas take commitment, so we tailor every message and interaction to assure consistency.",
      image_type: "Analyse",
    },
    {
      title: "02. Design",
      summary:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
      body:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated, easy. We like to take your brand back to its absolute essence. What are the questions you like to ask, and why? We like to peel back the onion, and pick your brain for a while. Bold ideas take commitment, so we tailor every message and interaction to assure consistency.",

      image_type: "Design",
    },
    {
      title: "03. Build",
      summary:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
      body:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated, easy. We like to take your brand back to its absolute essence. What are the questions you like to ask, and why? We like to peel back the onion, and pick your brain for a while. Bold ideas take commitment, so we tailor every message and interaction to assure consistency.",

      image_type: "Build",
    },
    {
      title: "04. Evolve",
      summary:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated easy.",
      body:
        "Our design approach is to simplify. We embrace the joy that comes from making something that was complicated, easy. We like to take your brand back to its absolute essence. What are the questions you like to ask, and why? We like to peel back the onion, and pick your brain for a while. Bold ideas take commitment, so we tailor every message and interaction to assure consistency.",

      image_type: "Evolve",
    },
  ],
};

export default function approach(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
