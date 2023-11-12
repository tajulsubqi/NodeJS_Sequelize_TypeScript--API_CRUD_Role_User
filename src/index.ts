import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/Routes";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({
    response: "Hello Bang",
  });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`${process.env.APP_NAME} running API on port ${process.env.APP_PORT}`);
});

app.use(router);
