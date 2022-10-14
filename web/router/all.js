import express from "express";
import { createNewUser } from "../controllers/all.js";
import cors from "cors"
import { axios_base_url } from "../helpers/utility.js";

const allRouter = async (app) => {
  app.use(cors());
  //Here we are configuring express to use body-parser as middle-ware.
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.get("/api/createNewUser", async (req, res) => {
    console.log('hello world')
    res.json({
      "status": "successfully created",
      "message": "New user created successfully"
    })
  });
  app.post("/api/createNewUser", createNewUser);
}

export default allRouter;
