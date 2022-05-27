const express = require("express");
const router = express.Router();
const fs = require("fs-extra");
const copyf = require("../../copy");

router.get("/frontend/", async (req, res) => {
  d = req.body || {
    name: "test",
    framework: "react-native",
  };

  copyf("/mobile/" + d.framework, "/" + d.name);
  res.send("Done");
});

router.get("/fullstack/", async (req, res) => {
  d = req.body || {
    name: "airbus",
    frontend: "react-native",
    backend: "express",
    db: "mongoDB",
  };

  copyf(`/mobile/${d.frontend}`, `/${d.name}/client`);
  copyf(`/backend/${d.backend}`, `/${d.name}/server`);
  copyf("/db/" + d.db + "/db.js", `/${d.name}/server/help/db.js`);

  res.send("Done");
});

module.exports = router;
