const express = require("express");
const path = require("path");

const app = express();

// Import route handlers
const monsterRoute = require("./routes/monsterRoute");
const npcRoute = require("./routes/npcRoute");
const characterRoute = require("./routes/characterRoute");
const spellRoute = require("./routes/spellRoute");
const locationRoute = require("./routes/locationRoute");

// Set view engine and views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route: Home
app.get("/", (req, res) => {
  res.render("layout", {
    content: "home",
    themeClass: "home-theme"
  });
});

// Mount data routes — these render layout too
app.use("/monsters", monsterRoute);
app.use("/npc", npcRoute);
app.use("/characters", characterRoute);
app.use("/spells", spellRoute);
app.use("/locations", locationRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
