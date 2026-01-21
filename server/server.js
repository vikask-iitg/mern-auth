// import express from 'express';
// import cors from "cors";
// import 'dotenv/config';
// import cookieParser from 'cookie-parser'
// import connectDB from './config/mongodb.js';
// import authRouter from './routes/authRoutes.js';
// import userRouter from './routes/userRoutes.js';

// const app = express();
// const port = process.env.PORT || 4000;
// connectDB();

// const allowedOrigins = ['http://localhost:5173']

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({origin: allowedOrigins, credentials: true }));

// // API Endpoints
// app.get('/', (req, res) => res.send("API is working!"));
// app.use('/api/auth', authRouter)
// app.use('/api/user', userRouter)

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// export default app;


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";



const app = express();

/* ---------- Database ---------- */
connectDB();

/* ---------- Middlewares ---------- */
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

/* ---------- Routes ---------- */
app.get("/", (req, res) => {
  res.status(200).send("API Working");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* ---------- Fallback ---------- */
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;




