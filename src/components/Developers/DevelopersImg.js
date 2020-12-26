import React from "react";
import { Image } from "semantic-ui-react";
import developers from "../../assets/icons/developers.svg";

function DevelopersImg() {
  return (
    <div style={{ alignItems: "center" }}>
      <Image src={developers} />
    </div>
  );
}

export default DevelopersImg;
