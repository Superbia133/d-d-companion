const express = require("express");
const router = express.Router();

// Example spell data
const spells = [
  {
    name: "Fireball",
    level: 3,
    school: "Evocation",
    castingTime: "1 action",
    range: "150 feet",
  },
  {
    name: "Mage Hand",
    level: 0,
    school: "Conjuration",
    castingTime: "1 action",
    range: "30 feet",
  },
  {
    name: "Cure Wounds",
    level: 1,
    school: "Evocation",
    castingTime: "1 action",
    range: "Touch",
  },
];

// Route handler with optional search
router.get("/", (req, res) => {
  const { search } = req.query;

  let filtered = spells;
  if (search) {
    const lowerSearch = search.toLowerCase();
    filtered = spells.filter((spell) =>
      spell.name.toLowerCase().includes(lowerSearch)
    );
  }

  res.render("spell", {
    title: "Spells",
    themeClass: "spells-theme",
    data: filtered,
    error: filtered.length === 0 ? "No spells found." : null,
  });
});

module.exports = router;
