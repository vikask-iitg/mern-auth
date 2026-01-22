import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

/* Database */
connectDB();

/* Middlewares */
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);


/* Routes */
app.get("/", (req, res) => {
  res.status(200).send("API Working");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* Fallback */
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;




