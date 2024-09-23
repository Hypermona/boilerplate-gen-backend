// https://stackoverflow.com/questions/10046039/node-js-send-file-in-response

const express = require("express");
const router = express.Router();
const fse = require("fs-extra");
let rimraf = require("rimraf");
const { ImpNames } = require("../help");

const zipAFold = async (name) => {
  const AdmZip = require("adm-zip");
  const zip = new AdmZip();

  const outputFile = `${__dirname}/../data/${name}.zip`;
  zip.addLocalFolder(`${__dirname}/../data/${name}`);
  await zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
};

router.post("/", async (req, res) => {
  data = req.body || {
    name: "test",
  };
  if (ImpNames.indexOf(data.name) !== -1) {
    res.send(`${data.name} name is not allowed`);
    return;
  }
  try {
    zipAFold(data.name);
    console.log(__dirname);
    const file = `${__dirname}/../data/${data.name}.zip`;
    res.download(file);
    await fse.remove(file);
    await rimraf(`${__dirname}/../data/${data.name}`, function () {
      console.log("done");
    });
  } catch (err) {
    console.log(err);
    res.send("download failed");
  }
});

module.exports = router;
