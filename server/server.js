const express = require("express");
const cors = require("cors");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("frontend")); // serve your frontend if needed

// 🟡 Route: Get Restaurant Listings (Home Page)
app.get("/api/swiggy", async (req, res) => {
  try {
    const swiggyUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5662253&lng=77.2045867&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(swiggyUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
        Accept: "application/json",
      },
    });

    const text = await response.text();
    console.log("🟡 Swiggy API Raw Response:", text.slice(0, 500)); // Log preview

    try {
      const data = JSON.parse(text);
      res.json(data);
    } catch (err) {
      console.error("🔴 JSON Parse Error:", err);
      res.status(500).json({ message: "Invalid JSON response from Swiggy", raw: text.slice(0, 300) });
    }
  } catch (error) {
    console.error("🔴 Fetch error:", error);
    res.status(500).json({ message: "Error fetching Swiggy data", error: error.message });
  }
});

// 🔵 Route: Get Menu for a Restaurant by ID
app.get("/api/menu/:id", async (req, res) => {
  const restaurantId = req.params.id;

  const menuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.652008&lng=77.166308&restaurantId=${id}&catalog_q=undefined&submitAction=ENTER`;

  try {
    const response = await fetch(menuUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
        Accept: "application/json",
      },
    });

    const text = await response.text();
    console.log(`🔵 Menu API response for ID ${restaurantId}:`, text.slice(0, 500)); // Preview log

    try {
      const data = JSON.parse(text);
      res.json(data);
    } catch (err) {
      console.error("🔴 JSON Parse Error (Menu):", err);
      res.status(500).json({ message: "Invalid JSON from Swiggy Menu API", raw: text.slice(0, 300) });
    }
  } catch (error) {
    console.error("🔴 Fetch Menu Error:", error);
    res.status(500).json({ message: "Failed to fetch menu", error: error.message });
  }
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
