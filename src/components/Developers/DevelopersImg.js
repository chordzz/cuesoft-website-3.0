import React from "react";
import { Image } from "semantic-ui-react";
<<<<<<< Updated upstream
import developers from "../../assets/icons/developers.svg";

function DevelopersImg() {
  return (
    <div style={{ alignItems: "center" }}>
=======
import developers from "../../icons/home/developers.svg";

function DevelopersImg() {
  return (
    <div
      style={{ alignItems: "center" }}
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
>>>>>>> Stashed changes
      <Image src={developers} />
    </div>
  );
}

export default DevelopersImg;
