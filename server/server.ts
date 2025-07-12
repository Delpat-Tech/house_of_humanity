import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoute from "./routes/testRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/test", testRoute);

app.get("/", (req, res) => {
  res.send("Hello from TypeScript backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
