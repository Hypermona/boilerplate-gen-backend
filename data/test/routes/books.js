const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get books");
});
router.post("/", (req, res) => {
  res.send("post books");
});
router.put("/", (req, res) => {
  res.send("update books");
});
router.delete("/user", (req, res) => {
  res.send("delete books");
});

module.exports = router;
