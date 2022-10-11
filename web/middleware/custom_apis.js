import mongoose from "mongoose";
import cors from "cors";
import { returnSessionData } from "../index.js";

export default function scriptTagApi(app) {
  app.use(cors());
  mongoose
    // .connect("mongodb://localhost:27017/playing-app")
    .connect(
      "mongodb+srv://sagar:sagar@cluster0.sh1h31k.mongodb.net/playing-app?retryWrites=true&w=majority"
    )
    .then(() => console.log("working"))
    .catch((err) => console.log(err));
  const DetailSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  });

  const User = mongoose.model("users", DetailSchema);
  const createDocument = async () => {
    try {
      const newUser = new User({
        id: "1",
        name: "Milan Ramani",
      });
      const result = await newUser.save();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  app.get("/api/test-api", async (req, res) => {
    createDocument();
    res.json({
      status: "success",
      message: "Data inserted successfully",
    });
  });

  app.get("/api/getOrder", async (req, res) => {
    const session = returnSessionData(req, res);

    res.json({
      status: "success",
      message: "Data inserted successfully:",
      session,
    });
  });
}
