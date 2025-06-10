// routes/npcRoute.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("npc"); // assumes npc.ejs lives in /views
});

module.exports = router;
