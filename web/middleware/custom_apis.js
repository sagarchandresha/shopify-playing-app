import mongoose from "mongoose";
import cors from "cors";
import express from "express";

export default function customApis(app) {
  app.use(cors());
  //Here we are configuring express to use body-parser as middle-ware.
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  mongoose
    // .connect("mongodb://localhost:27017/playing-app")
    .connect(
      "mongodb+srv://sagar:sagar@cluster0.sh1h31k.mongodb.net/playing-app?retryWrites=true&w=majority"
    )
    .then(() => console.log("working"))
    .catch((err) => console.log(err));
  const DetailSchema = new mongoose.Schema({
    shop: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    installed_on: {
      type: Date,
      default: new Date(),
    },
  });

  const User = mongoose.model("users", DetailSchema);

  const createDocument = async (shop, token) => {
    try {
      const newUser = new User({
        shop: shop,
        token: token,
      });
      const result = await newUser.save();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  app.post("/api/testPost", async (req, res) => {
    console.log(req.body);
    res.json({
      status: "success",
      message: "Data inserted successfully",
    });
  });
  app.get("/api/newUser", async (req, res) => {
    createDocument(
      "playing-app.myshopify.com",
      "this is going to be access token"
    );
    res.json({
      status: "success",
      message: "Data inserted successfully",
    });
  });
}
