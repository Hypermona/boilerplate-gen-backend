const express = require("express");
const router = express.Router();
const fse = require("fs-extra");
let rimraf = require("rimraf");
const { ImpNames } = require("../help");

router.get("/", async (req, res) => {
  data = req.body || {
    name: "test",
  };
  if (ImpNames.indexOf(data.name) !== -1) {
    res.send(`${data.name} name is not allowed`);
    return;
  }
  try {
    const file = `${__dirname}/../data/${data.name}.zip`;
    await fse.remove(file);
    await rimraf(`${__dirname}/../data/${data.name}`, function () {
      console.log("done");
    });
    res.send("success");
  } catch (err) {
    console.log(err);
    res.send("failed to delete");
  }
});

module.exports = router;
