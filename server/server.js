import express from "express";
import cors from "cors";
import pool from "./db.js"; // import the pool here

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // for parsing JSON request bodies

// ===== ROUTES =====

// Test route
app.get("/", (req, res) => {
  res.send("Backend is live!");
});

// Users route using your snippet
app.get("/api/users", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});