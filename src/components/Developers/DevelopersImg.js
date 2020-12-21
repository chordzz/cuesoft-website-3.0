import React from "react";
import { Image } from "semantic-ui-react";
// import Pattern from "../../icons/home/pattern.svg";
// import TopImg from "../../icons/home/top-img.svg";
// import MiddleImg from "../../icons/home/middle-img.svg";
import developers from '../../icons/home/developers.svg'

function DevelopersImg() {
  return (
    <div style={{ alignItems: 'center'}}>
      <Image src={developers} />
    </div>
    // <div style={{ margin: "60px 0 0 120px" }}>
    //   <Image
    //     src={Pattern}
    //     size="small"
    //     style={{ position: "relative", alignItems: "center" }}
    //   />
    //   <Image
    //     src={MiddleImg}
    //     size="small"
    //     style={{ position: "absolute", top: "40px", right: "50px" }}
    //   />
    //   <Image
    //     src={TopImg}
    //     style={{
    //       position: "absolute",
    //       top: "-50px",
    //       right: "100px",
    //       height: "270px",
    //       width: "200px",
    //     }}
    //   />
    // </div>
  );
}

export default DevelopersImg;
