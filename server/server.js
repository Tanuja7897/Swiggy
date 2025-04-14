const express = require("express");
const cors = require("cors");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("frontend"));

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
    console.log("🟡 Swiggy API Raw Response:", text.slice(0, 500)); // Preview only

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

// 🔽 This line is necessary to actually start the server!
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
