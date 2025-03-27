import express, { Express, Request, Response } from "express";
import { taskRouter } from "@routes/tasks";

const app: Express = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
