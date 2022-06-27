import { Image } from "semantic-ui-react";
import { ProductSegmentProps } from "../../types/componentTypes";

function ProductSegment({ product, darkMode }: ProductSegmentProps) {
  return (
    <div style={{ marginBottom: "30px" }} className="product-segment">
      <Image src={product.banner} />
      <h4
        style={{ color: darkMode ? "#ffffff" : "#000000", textAlign: "center" }}
      >
        {product.name}
      </h4>
      <p
        style={{ color: darkMode ? "#ffffff" : "#000000", textAlign: "center" }}
      >
        {product.description}
      </p>
    </div>
  );
}

export default ProductSegment;