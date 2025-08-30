// server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// Google Search proxy (example uses SerpAPI)
app.get("/api/search", async (req, res) => {
  const q = req.query.q;
  try {
    const r = await fetch(
      `https://serpapi.com/search.json?q=${encodeURIComponent(q)}&api_key=${process.env.SERPAPI_KEY}`
    );
    const j = await r.json();
    const snippets = (j.organic_results || []).map(r => ({
      title: r.title,
      snippet: r.snippet,
      link: r.link
    }));
    res.json({ snippets });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// AI Pipe proxy
app.post("/api/aipipe", async (req, res) => {
  try {
    const r = await fetch(process.env.AIPIPE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const j = await r.json();
    res.json(j);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy running on http://localhost:${port}`));
