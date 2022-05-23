const express = require("express");
const app = express();
const generate = require("./routes/generate");
const download = require("./routes/download");
const port = 3000;

app.use("/download", download);
app.use("/generate", generate);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
