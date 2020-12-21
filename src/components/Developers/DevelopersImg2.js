import React from "react";
import { Image } from "semantic-ui-react";
// import Pattern from "../../assets/icons/pattern.svg";
// import TopImg2 from "../../assets/icons/top-img-2.svg";
// import MiddleImg2 from "../../assets/icons/middle-img-2.svg";
import developers1 from "../../assets/icons/developers1.svg";

function DevelopersImg2() {
  return (
    <div style={{ alignItems: "center" }}>
      <Image src={developers1} />
    </div>
    // <div>
    //   <Image src={Pattern} size="small" style={{ position: "relative" }} />
    //   <Image
    //     src={MiddleImg2}
    //     size="small"
    //     style={{ position: "absolute", top: "30px", left: "-30px" }}
    //   />
    //   <Image
    //     src={TopImg2}
    //     style={{
    //       position: "absolute",
    //       top: "-70px",
    //       left: "-150px",
    //       height: "270px",
    //       width: "200px",
    //     }}
    //   />
    // </div>
  );
}

export default DevelopersImg2;
