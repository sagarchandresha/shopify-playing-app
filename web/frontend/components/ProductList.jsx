import { Card, ResourceList } from "@shopify/polaris";
import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <>
      <Card>
        <ResourceList
          resourceName={{ singular: "Product", plural: "Products" }}
          items={products}
          renderItem={(item) => {
            return <ProductItem product={item} />;
          }}
        />
      </Card>
    </>
  );
}

export default ProductList;
