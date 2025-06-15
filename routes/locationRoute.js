const express = require("express");
const router = express.Router();

// Example location data
const locations = [
  {
    name: "Neverwinter",
    type: "City",
    region: "The Sword Coast",
    knownFor: "Trade, adventure, and rebuilding after disaster",
  },
  {
    name: "Baldur's Gate",
    type: "City",
    region: "Western Heartlands",
    knownFor: "Crime, commerce, and politics",
  },
  {
    name: "The Underdark",
    type: "Cavern Network",
    region: "Below Faerûn",
    knownFor: "Dangerous creatures and drow cities",
  },
];

// Route with optional search
router.get("/", (req, res) => {
  const { search } = req.query;

  let filtered = locations;
  if (search) {
    const term = search.toLowerCase();
    filtered = locations.filter((loc) =>
      loc.name.toLowerCase().includes(term)
    );
  }

  res.render("location", {
    title: "Locations",
    themeClass: "locations-theme",
    data: filtered,
    error: filtered.length === 0 ? "No locations found." : null,
  });
});

module.exports = router;
