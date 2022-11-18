import { Request, Response } from "express";
import { clearInterval } from "timers";

let segundos = 0;
let minutos = 0;
let tempo = 0;
let pausar = false;

const contadorTempo = () => {
  const idTempo = setInterval(() => {
    tempo++;
    let minutoAtual = Math.floor(tempo / 60);
    minutos = minutoAtual;
    console.log(tempo);
    segundos++;
    if (segundos === 60) {
      segundos = 0;
    }
    if (pausar) {
      console.log("entrou");
      clearInterval(idTempo);
    }
  }, 1000);
};

class Exercicio02 {
  raiz(req: Request, res: Response) {
    res.send({
      "Tempo atual do cronômetro": `${
        minutos < 10 ? `0${minutos}` : minutos
      } minutos e ${segundos < 10 ? `0${segundos}` : segundos} segundos`,
    });
  }

  iniciar(req: Request, res: Response) {
    if (tempo <= 0) {
      contadorTempo();
    }
    res.send("Cronômetro iniciado!");
  }

  pausar(req: Request, res: Response) {
    pausar = true;
    res.send("Cronômetro pausado!");
  }

  continuar(req: Request, res: Response) {
    if (pausar) {
      pausar = false;
      contadorTempo();
    }
    res.send("Cronômetro continuando!");
  }

  zerar(req: Request, res: Response) {
    segundos = 0;
    minutos = 0;
    tempo = 0;
    // pausar = false;
    res.send("Cronômetro zerado!");
  }
}

export { Exercicio02 };
