import mongoose from "mongoose";

mongoose
  // .connect("mongodb://localhost:27017/playing-app")
  .connect(
    "mongodb+srv://sagar:sagar@cluster0.sh1h31k.mongodb.net/playing-app?retryWrites=true&w=majority"
  )
  .then(() => console.log("working"))
  .catch((err) => console.log(err));
