import { useEffect, useState } from "react";
import EmptyProductPage from "../components/products/EmptyProductPage";
import ProductPage from "../components/products/ProductPage";
import store from "store-js";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { Page, TextContainer } from "@shopify/polaris";

export default function HomePage({ host }) {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsId, setProductsId] = useState([]);
  console.log("---", host);
  useEffect(() => {
    const ids = products.map((product) => {
      return { id: product.id };
    });
    setProductsId(ids);
  }, [products]);

  const handleSelection = (selection) => {
    setOpen(false);
    setProducts([...selection.selection]);
  };
  return (
    <>
      <TextContainer spacing="tight">
        <Page
          title="Product"
          primaryAction={{
            content: "Select Product",
            onAction: () => setOpen(true),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          open={open}
          onCancel={() => setOpen(false)}
          onSelection={handleSelection}
          initialSelectionIds={productsId}
        />
        {products.length == 0 ? (
          <>
            <EmptyProductPage
              setOpen={setOpen}
              open={open}
              handleSelection={handleSelection}
              productsId={productsId}
            />
          </>
        ) : (
          <ProductPage products={products} />
        )}
      </TextContainer>
    </>
  );
}
