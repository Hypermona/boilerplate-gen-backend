// https://stackoverflow.com/questions/10046039/node-js-send-file-in-response

const express = require("express");
const router = express.Router();

const zipAFold = async () => {
  const AdmZip = require("adm-zip");
  const zip = new AdmZip();
  const outputFile = "react-js.zip";
  zip.addLocalFolder("${__dirname}/../data/work");
  await zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
};

router.get("/", async (req, res) => {
  zipAFold();
  const file = `${__dirname}/../react-js.zip`;
  res.download(file);
});

module.exports = router;
