import mongoose from "mongoose";

export const createNewUser = async (req, res) => {
  console.log("call new user api")
  const data = req.body;
  const DetailSchema = new mongoose.Schema({
    shop: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    scope: {
      type: String,
      required: true,
    },
    installed_on: {
      type: Date,
      default: new Date(),
    },
  });
  const User = mongoose.model("users", DetailSchema);
  try {
    const newUser = new User({
      shop: data.shop,
      token: data.token,
      scope: data.scope,
    });
    const result = await newUser.save();
    console.log(result);
    res.json({
      status: "success",
      message: "Data inserted successfully",
    })
  } catch (err) {
    console.log(err);
    res.json({
      status: "fail",
      message: "Fail to insert data",
    });
  }
};
