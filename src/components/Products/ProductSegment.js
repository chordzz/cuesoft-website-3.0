import React from "react";
import { Image } from "semantic-ui-react";

function ProductSegment({ product, darkMode }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Image src={product.img} />
      <h4
        style={{ color: darkMode ? "#ffffff" : "#000000", textAlign: "center" }}
      >
        {product.brand}
      </h4>
      <p
        style={{ color: darkMode ? "#ffffff" : "#000000", textAlign: "center" }}
      >
        {product.desc}
      </p>
    </div>
  );
}

export default ProductSegment;
