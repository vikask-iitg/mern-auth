import dotenv from "dotenv";
dotenv.config(); // ✅ FIRST LINE

import app from "./server.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`SLocal server running at http://localhost:${PORT}`);
});

