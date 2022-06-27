import { Image } from "semantic-ui-react";
import Top_img_webp from "../../assets/images/top-img2.webp";

function DevelopersImg2() {
  return (
    <div className="dev-img-2">
      <picture>
        <Image src={Top_img_webp} alt="top image" className="img-2" />
      </picture>
    </div>
  );
}

export default DevelopersImg2;
