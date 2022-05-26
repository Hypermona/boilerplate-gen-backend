const express = require("express");
const app = express();
const web = require("./routes/generate/web");
const mobile = require("./routes/generate/mobile");
const download = require("./routes/download");
const morgan = require("morgan");
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.use("/download", download);
app.use("/generate/web", web);
app.use("/generate/mobile", mobile);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
