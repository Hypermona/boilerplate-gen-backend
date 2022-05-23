// https://stackoverflow.com/questions/10046039/node-js-send-file-in-response

const express = require("express");
const app = express();
const port = 3000;

app.get("/download", (req, res) => {
  const file = `${__dirname}/simple.rar`;
  res.download(file);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
