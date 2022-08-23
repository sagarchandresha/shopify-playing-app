import { Page } from "@shopify/polaris";
import React from "react";
import ProductList from "../ProductList";

function ProductPage({ products }) {
  return (
    <Page>
      <ProductList products={products} />
    </Page>
  );
}

export default ProductPage;
