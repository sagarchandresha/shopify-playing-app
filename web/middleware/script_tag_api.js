import { Shopify } from "@shopify/shopify-api";
import { createScriptTag } from "./script_tag_helper.js";

export default function scriptTagApi(app) {
  app.get("/api/scriptTag", async (req, res) => {
    res.json({
      status: "success",
      message: "Custom API",
    });
  });
  app.get("/api/scriptTag/all", async (req, res) => {
    res.json({
      status: "success",
      message: "all Custom API",
    });
  });
  app.post("/api/scriptTag", async (req, res) => {
    const test_session = await Shopify.Utils.loadCurrentSession(req, res);
    console.log(test_session);
    await createScriptTag(req, res);
  });
  app.delete("/api/scriptTag", async (req, res) => {
    res.json({
      status: "success",
      message: "delete Custom API",
    });
  });
}
