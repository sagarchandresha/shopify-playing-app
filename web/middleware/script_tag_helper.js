import { ScriptTag } from "@shopify/shopify-api/dist/rest-resources/2022-07/index.js";
import { Shopify } from "@shopify/shopify-api";
export async function createScriptTag(req, res) {
  // const script_tag = new ScriptTag({ session: test_session });
  // script_tag.event = "onload";
  // script_tag.src = "https://google.com/";
  // await script_tag.save({
  //   update: true,
  // });
}

function baseUrl(shop) {
  return `https://${shop}`;
}
function getAllScriptTagsUrl(shop) {
  return `${baseUrl(shop)}/admin/api/2021-10/script_tags.json`;
}
function getCreateScriptTagUrl(shop) {
  return `${baseUrl(shop)}/admin/api/2021-10/script_tags.json`;
}
function getScriptTagUrl(shop, id) {
  return `${baseUrl(shop)}/admin/api/2021-10/script_tags/${id}.json`;
}
function deleteScriptTagUrl(shop, id) {
  return `${baseUrl(shop)}/admin/api/2021-10/script_tags/${id}.json`;
}
