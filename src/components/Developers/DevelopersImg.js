import React from "react";
import { Image } from "semantic-ui-react";
// import Top_img from "../../assets/images/top-img1.png";
//import Top_img_webp from "../../assets/images/top-img1.webp";
import Developers_img from "../../assets/images/developers_img.jpg";
// import Trial from "../../assets/icons/trial.svg";

function DevelopersImg() {
  return (
    <div
      style={{ alignItems: "center" }}
      // data-aos="fade-left"
      // data-aos-offset="200"
      // data-aos-duration="1000"
      // data-aos-delay="1000"
      className="dev-img"
    >
      {/* <Image src={Trial} alt="trial" className="boxes" /> */}
      <picture>
        {/* <source srcSet={Top_img_webp} type="image/webp" />
        <source srcSet={Top_img} type="image/png" /> */}
        <Image src={Developers_img} alt="top image" className="img-1" />
      </picture>
    </div>
  );
}

export default DevelopersImg;
