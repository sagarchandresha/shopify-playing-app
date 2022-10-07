import { useEffect, useState } from "react";
import EmptyProductPage from "../components/products/EmptyProductPage";
import ProductPage from "../components/products/ProductPage";
import {
  ResourcePicker,
  useAppBridge,
  useNavigate,
} from "@shopify/app-bridge-react";
import { Page, TextContainer } from "@shopify/polaris";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsId, setProductsId] = useState([]);
  const { hostOrigin } = useAppBridge();
  const navigate = useNavigate();

  useEffect(() => {
    // const productList = store.get(`${hostOrigin}-products`);
    // productList && setProducts(productList);
  }, []);
  useEffect(() => {
    const ids = products.map((product) => {
      return { id: product.id };
    });
    setProductsId(ids);
  }, [products]);

  const handleSelection = (selection) => {
    setOpen(false);
    setProducts([...selection.selection]);
    // store.set(`${hostOrigin}-products`, selection.selection);
  };
  return (
    <>
      <TextContainer spacing="tight">
        <Link to="/InstallBanner">InstallBanner</Link>
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
