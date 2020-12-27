import React from "react";
import { Image } from "semantic-ui-react";
<<<<<<< Updated upstream
import developers1 from "../../assets/icons/developers1.svg";

function DevelopersImg2() {
  return (
    <div style={{ alignItems: "center" }}>
=======
import developers1 from "../../icons/home/developers1.svg";

function DevelopersImg2() {
  return (
    <div
      style={{ alignItems: "center" }}
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
>>>>>>> Stashed changes
      <Image src={developers1} />
    </div>
  );
}

export default DevelopersImg2;
