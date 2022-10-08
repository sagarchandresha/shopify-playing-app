import mongoose from "mongoose";
import cors from "cors";

export default function scriptTagApi(app) {
  app.use(cors());
  mongoose.connect("mongodb://localhost:27017/playing-app").then(() => console.log("working")).catch((err) => console.log(err))
  const DetailSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  });
  
  const User = mongoose.model("user", DetailSchema);
  const createDocument = async () => {
    try{
      const newUser = new User({
        id: "2",
        name: "Sagar Chandresha"
      })
      const result = await newUser.save();
      console.log(result);
    } catch(err){
      console.log(err);
    }
  }
  app.get("/api/test-api", async (req, res) => {
    createDocument();
    res.json({
      status: "success",
      message: "Data inserted successfully",
    });
  });
}