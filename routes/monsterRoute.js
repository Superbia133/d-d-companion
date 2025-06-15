const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const search = req.query.search || "";
  const type = req.query.type || "";
  const limit = 10;
  const offset = (page - 1) * limit;

  const apiUrl = `https://api.open5e.com/monsters/?limit=${limit}&offset=${offset}&search=${encodeURIComponent(search)}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    let monsters = data.results || [];

    if (type) {
      monsters = monsters.filter((m) =>
        m.type?.toLowerCase() === type.toLowerCase()
      );
    }

    const next = data.next ? page + 1 : null;

    res.render("layout", {
      content: "monster",
      themeClass: "monsters-theme",
      monsters,
      error: null,
      next,
      search,
      page,
      selectedType: type,
    });
  } catch (error) {
    console.error("❌ Failed to fetch monsters:", error.message);

    res.render("layout", {
      content: "monster",
      themeClass: "monsters-theme",
      monsters: [],
      error: "Could not load monster data.",
      next: null,
      search,
      page,
      selectedType: type,
    });
  }
});

module.exports = router;
