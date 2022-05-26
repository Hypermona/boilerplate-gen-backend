const mongoose = require("mongoose"); // Require mongoose library
require("dotenv").config();

const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfuly Connected to MongoDB!");
    })
    .catch((err) => {
      console.error("MongoDB Connection Error", err);
    });
};

module.exports = databaseConnection;
