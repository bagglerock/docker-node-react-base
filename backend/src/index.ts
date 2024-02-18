import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3001; // Ensure this port is different from the frontend port

app.use(cors());

app.get("/catfact", async (req, res) => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cat fact" });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
