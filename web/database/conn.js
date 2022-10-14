import mongoose from "mongoose";

export const conn = async () => {
  var connection = false;
  await mongoose
    // .connect("mongodb://localhost:27017/playing-app")
    .connect(
      "mongodb+srv://sagar:sagar@cluster0.sh1h31k.mongodb.net/playing-app?retryWrites=true&w=majority"
    )
    .then(() => {
      connection = true;
      console.log("successfully connection");
    })
    .catch((err) => console.log("err:", err));
  return connection;
};
