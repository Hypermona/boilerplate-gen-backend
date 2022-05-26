const express = require("express");
const app = express(); //Create new instance
const morgan = require("morgan"); // for logging
const helmet = require("helmet");
const PORT = process.env.PORT || 5000;

//add all your routes here
const books = require("./routes/books");

//db
const databaseConnection = require("./help/db"); // only if your using database
databaseConnection(); // only if your using database

//Declare the port number
app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev")); //enable incoming request logging in dev mode
app.use(helmet()); //helps you secure your Express apps by setting various HTTP headers

//Define the endpoint
app.get("/api", (req, res) => {
  res.send({
    data: "This data is from the backend.",
  });
});
app.use("/api/books", books);

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});
