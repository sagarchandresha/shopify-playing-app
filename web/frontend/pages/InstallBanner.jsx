import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { Card, Layout, Page, SettingToggle, TextStyle } from "@shopify/polaris";
import axios from "axios";
import React, { useState } from "react";

function InstallBanner() {
  const [isInstalled, setIsInstalled] = useState(null);
  const contentStatus = isInstalled ? "Install" : "Uninstall";
  const contentText = !isInstalled ? "installed" : "uninstalled";
  const app = useAppBridge();
  console.log(app);
  const handleToggle = async () => {
    if (!isInstalled) {
      const token = await getSessionToken(app);
      const config = {
        headers: {
          Autorization: `Bearer ${token}`,
        },
      };
      axios.post(app.localOrigin + "/api/scriptTag", {}, config);
    }
    setIsInstalled(!isInstalled);
  };
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card title={`${contentStatus} Your Script`} sectioned>
            <SettingToggle
              action={{
                content: contentStatus,
                onAction: handleToggle,
              }}
              enabled={true}
            >
              Banner script is{" "}
              <TextStyle variation="strong">{contentText}</TextStyle>
            </SettingToggle>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default InstallBanner;
