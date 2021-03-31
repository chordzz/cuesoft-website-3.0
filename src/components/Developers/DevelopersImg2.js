import React from "react";
import { Image } from "semantic-ui-react";
import Top_img from "../../assets/images/top-img2.png";
import Top_img_webp from "../../assets/images/top-img2.webp";
import Trial from "../../assets/icons/trial2.svg";

function DevelopersImg2() {
  return (
    <div
      style={{ alignItems: "center" }}
      // data-aos="fade-up"
      // data-aos-offset="100"
      // data-aos-duration="1000"
      // data-aos-delay="1000"
      className="dev-img-2"
    >
      <Image src={Trial} alt="trial" className="boxes-2" />
      <picture>
        <source srcSet={Top_img_webp} type="image/webp" />
        <source srcSet={Top_img} type="image/png" />
        <Image src={Top_img_webp} alt="top image" className="img-2" />
      </picture>
    </div>
  );
}

export default DevelopersImg2;
