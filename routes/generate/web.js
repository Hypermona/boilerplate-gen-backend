const express = require("express");
const router = express.Router();
const fs = require("fs-extra");
const copyf = require("../../copy");
const generateCompose = require("../../data/containers/services/generate");

router.get("/backend", async (req, res) => {
  d = req.body || {
    name: "test",
    framework: "express",
    db: "mongoDB",
    container: true,
  };

  copyf("/backend/" + d.framework, "/" + d.name);
  if (d.container) {
    copyf(`/containers/dockerfile`, `/${d.name}/dockerfile`);
    copyf(`/containers/.dockerignore`, `/${d.name}/.dockerignore`);
  }
  copyf("/db/" + d.db + "/db.js", `/${d.name}/help/db.js`);
  res.send("Done");
});

router.get("/frontend", async (req, res) => {
  d = req.body || {
    name: "test",
    framework: "react",
    container: true,
  };

  copyf("/frontend/" + d.framework, "/" + d.name);
  if (d.container) {
    copyf(`/containers/dockerfile`, `/${d.name}/dockerfile`);
    copyf(`/containers/.dockerignore`, `/${d.name}/.dockerignore`);
  }
  res.send("Done");
});

router.get("/fullstack/", async (req, res) => {
  d = req.body || {
    name: "airbus",
    frontend: "vue",
    backend: "express",
    db: "mongoDB",
    container: true,
    compose: true,
  };

  copyf(`/frontend/${d.frontend}`, `/${d.name}/client`);
  copyf(`/backend/${d.backend}`, `/${d.name}/server`);
  copyf("/db/" + d.db + "/db.js", `/${d.name}/server/help/db.js`);
  if (d.container) {
    copyf(`/containers/dockerfile`, `/${d.name}/client/dockerfile`);
    copyf(`/containers/.dockerignore`, `/${d.name}/server/.dockerignore`);
  }
  let status = false;
  if (d.compose) {
    await generateCompose(d.name, d.frontend, d.backend, d.db);
  }
  res.send("Done");
});

module.exports = router;
