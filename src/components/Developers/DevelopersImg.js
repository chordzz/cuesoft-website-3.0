import React from "react";
import { Image } from "semantic-ui-react";

import Developers_img from "../../assets/illustrations/Build.svg";

function DevelopersImg() {
  return (
    <div style={{ alignItems: "center" }} className="dev-img">
      <picture>
        <Image src={Developers_img} alt="top image" className="img-1" />
      </picture>
    </div>
  );
}

export default DevelopersImg;
