import { Router, Request, Response } from "express";
import { Exercicio01 } from "./01/Exercicio01";
import { Exercicio02 } from "./02/Exercicio02";

const router = Router();
const exercicio01 = new Exercicio01();
const exercicio02 = new Exercicio02();

router.get("/", (req: Request, res: Response) => {
  res.send("hello World!");
});

router.get("/jogadas", exercicio01.rodadas);

router.get("/cronometro", exercicio02.raiz);
router.get("/cronometro/iniciar", exercicio02.iniciar);
router.get("/cronometro/pausar", exercicio02.pausar);
router.get("/cronometro/continuar", exercicio02.continuar);
router.get("/cronometro/zerar", exercicio02.zerar);

export { router };
