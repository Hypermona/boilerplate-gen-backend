const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  fs.copyFile(
    `${__dirname}/../data/frontend/a.txt`,
    `${__dirname}/../data/work/docker.txt`,
    (err) => {
      if (err) {
        console.log("Error Found:", err);
      }
    }
  );
  fs.copyFile(
    `${__dirname}/../data/frontend/b.txt`,
    `${__dirname}/../data/work/index.txt`,
    (err) => {
      if (err) {
        console.log("Error Found:", err);
      }
    }
  );
  res.send("Done");
});

module.exports = router;
