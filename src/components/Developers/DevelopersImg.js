import React from "react";
import { Image } from "semantic-ui-react";
import developers from "../../assets/icons/developers.svg";

function DevelopersImg() {
  return (
    <div
      style={{ alignItems: "center" }}
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
      <Image src={developers} />
    </div>
  );
}

export default DevelopersImg;
