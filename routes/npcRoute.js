const express = require("express");
const router = express.Router();

// Example NPC data
const npcs = [
  {
    name: "Mira the Innkeeper",
    race: "Human",
    occupation: "Innkeeper",
    location: "Copper Hearth Tavern",
    demeanor: "Warm and curious",
  },
  {
    name: "Varnak the Blacksmith",
    race: "Half-Orc",
    occupation: "Blacksmith",
    location: "Forge of Embers",
    demeanor: "Gruff but fair",
  },
  {
    name: "Elyra Moonwhisper",
    race: "Elf",
    occupation: "Healer",
    location: "Moonwell Grove",
    demeanor: "Calm and mysterious",
  },
];

router.get("/", (req, res) => {
  res.render("layout", {
    content: "npc",
    themeClass: "npc-theme",
    data: npcs,
    error: null,
  });
});

module.exports = router;
