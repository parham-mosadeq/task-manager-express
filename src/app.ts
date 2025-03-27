import express, { Express } from "express";
import { taskRouter } from "@routes/tasks";
import { connectToDB } from "@database/connect";
import { config } from "dotenv";

const app: Express = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/tasks", taskRouter);

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

async function main() {
  try {
    config();
    await connectToDB(process.env.MONGO_URI!);
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at ${PORT}`);
    });
  } catch (error) {
    console.warn(error, "Something went wrong!");
  }
}

main();
