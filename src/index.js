const readline = require('readline');

function rankingCalc(victories, loses) {
  let rank = victories - loses;
  let level;

  /**
    Se vitórias for menor do que 10 = Ferro
    Se vitórias for entre 11 e 20 = Bronze
    Se vitórias for entre 21 e 50 = Prata
    Se vitórias for entre 51 e 80 = Ouro
    Se vitórias for entre 81 e 90 = Diamante
    Se vitórias for entre 91 e 100= Lendário
    Se vitórias for maior ou igual a 101 = Imortal
   */

  if (rank <= 10) {
    level = "Ferro";
  } else if (rank > 10 && rank <= 20) {
    level = "Bronze";
  } else if (rank > 20 && rank <= 50) {
    level = "Prata";
  } else if (rank > 50 && rank <= 80) {
    level = "Ouro";
  } else if (rank > 80 && rank <= 90) {
    level = "Diamante";
  } else if (rank > 90 && rank <= 100) {
    level = "Lendário";
  } else if (rank >= 101) {
    level = "Imortal";
  }

  return `O Herói tem de saldo de ${rank} está no nível de ${level}`;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  let repeat = true;

  while (repeat) {
    let victories = await askQuestion("Digite o número de vitórias: ");
    let loses = await askQuestion("Digite o número de derrotas: ");

    console.log(rankingCalc(Number(victories), Number(loses)));

    let answer = await askQuestion("Deseja calcular novamente? (s/n): ");

    repeat = answer.toLowerCase() === 's';
  }

  rl.close();
}

main();