import axios from "axios";
import { axios_base_url } from "./utility.js";

export const newUser = async (shop, accessToken) => {
  axios
    .post(axios_base_url + "/api/newUser", {
      shop: shop,
      token: accessToken,
    })
    .then(function (response) {
      console.log("response:", response);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
