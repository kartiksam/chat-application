const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/userRoute");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoute);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection succesful");
  })
  .catch((err) => {
    console.log(err.message);
  });
const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on port ${process.env.PORT}`);
});
