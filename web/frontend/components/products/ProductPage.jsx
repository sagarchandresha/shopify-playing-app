import { Page } from "@shopify/polaris";
import React from "react";
import ProductList from "../ProductList";

function ProductPage({ products }) {
  return (
    <Page>
      <ProductList products={products} />
      <Button outline> Get Order</Button>
    </Page>
  );
}

export default ProductPage;
