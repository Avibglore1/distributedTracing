import express from "express";
import unitRoutes from "./routes/unit.routes.js";

const app = express();

app.use(express.json());
app.use("/api/unit", unitRoutes);

export default app;