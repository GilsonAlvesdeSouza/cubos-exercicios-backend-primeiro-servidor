import { Request, Response } from "express";
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let count = 0;

class Exercicio01 {
  rodadas(req: Request, res: Response) {
    if (count === jogadores.length) {
      count = 0;
    }
    res.send(`É a vez de ${jogadores[count]} jogar!`);
    count++;
  }
}

export { Exercicio01 };
