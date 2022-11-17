import { Router, Request, Response } from "express";
import { Exercicio01 } from "./01/Exercicio01";

const router = Router();
const exercicio01 = new Exercicio01();

router.get("/", (req: Request, res: Response) => {
  res.send("hello World!");
});

router.get("/jogadas", exercicio01.rodadas);

export { router };
