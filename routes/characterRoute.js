const express = require("express");
const router = express.Router();

// Example character data
const characters = [
  {
    name: "Thorne Ironhide",
    class: "Fighter",
    level: 5,
    race: "Dwarf",
    background: "Soldier",
  },
  {
    name: "Seraphina Willowwind",
    class: "Druid",
    level: 7,
    race: "Halfling",
    background: "Hermit",
  },
  {
    name: "Kael'thas Duskblade",
    class: "Warlock",
    level: 6,
    race: "Tiefling",
    background: "Noble",
  },
];

router.get("/", (req, res) => {
  res.render("character", {
    title: "Characters",
    themeClass: "character-theme",
    data: characters,
    error: null,
  });
});

module.exports = router;
