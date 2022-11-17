import express, { Request, Response } from "express";
import dotenv from "dotenv";

import { router } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on Port => ${PORT}\nhttp://localhost:${PORT}`);
});
