import { Request, Response } from "express";
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let count = 0;

class Exercicio01 {
  rodadas(req: Request, res: Response) {
    res.send(`É a vez de ${jogadores[count]} jogar!`);
    count = (count + 1) % jogadores.length;
  }
}

export { Exercicio01 };
