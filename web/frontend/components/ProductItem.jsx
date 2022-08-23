import { Avatar, ResourceItem, TextStyle } from "@shopify/polaris";
import React from "react";

function ProductItem({ product }) {
  console.log(product);
  return (
    <ResourceItem
      media={
        <Avatar
          customer
          size="medium"
          name={product.title}
          source={product.images[0].originalSrc}
        />
      }
      accessibilityLabel={`View details for ${product.title}`}
      name={product.title}
    >
      <h3>
        <TextStyle variation="strong">{product.title}</TextStyle>
      </h3>
    </ResourceItem>
  );
}

export default ProductItem;
