import { DisplayText, Page } from "@shopify/polaris";
import React from "react";

function EmptyProductPage({ setOpen }) {
  return (
    <>
      {" "}
      <Page>
        <DisplayText size="medium">Hey, How are you ?</DisplayText>
      </Page>
    </>
  );
}

export default EmptyProductPage;
