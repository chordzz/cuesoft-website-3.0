import React from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types'

function ProductSegment({product, darkMode}){
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
    )
}

ProductSegment.prototypes = {
  darkMode: PropTypes.bool,
  productsData: PropTypes.object.isRequired,
}
export default ProductSegment;