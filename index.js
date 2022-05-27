const express = require("express");
const app = express();
const web = require("./routes/generate/web");
const mobile = require("./routes/generate/mobile");
const download = require("./routes/download");
const _delete = require("./routes/delete");
const cors = require("cors");
const morgan = require("morgan");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/download", download);
app.use("/delete", _delete);
app.use("/generate/web", web);
app.use("/generate/mobile", mobile);

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`);
});
