import dotenv from "dotenv";
import express, { Application, Express, Request, Response } from "express";
import { getEnv } from "./getenv";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

dotenv.config();

const app: Application = express();
const port = getEnv("PORT", 3000);
app.set("trust proxy", true);

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

// app.use(router_mandiri);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
