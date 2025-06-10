const express = require("express");
const path = require("path");

const app = express();
const npcRoute = require("./routes/npcRoute");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); // Serve /public folder

// Mount /npc route
app.use("/npc", npcRoute);

// Home route
app.get("/", (req, res) => {
  res.render("home"); // Will render views/home.ejs
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
