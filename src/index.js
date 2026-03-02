const readline = require("readline");

// catálogo de pilotos jogáveis (F1)
const characters = [
  { nome: "Max Verstappen", velocidade: 5, curva: 5, agressividade: 5 },
  { nome: "Charles Leclerc", velocidade: 5, curva: 4, agressividade: 4 },
  { nome: "Lewis Hamilton", velocidade: 4, curva: 5, agressividade: 5 },
  { nome: "Lando Norris", velocidade: 4, curva: 4, agressividade: 4 },
  { nome: "Fernando Alonso", velocidade: 4, curva: 4, agressividade: 5 },
  { nome: "Carlos Sainz", velocidade: 4, curva: 3, agressividade: 3 },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function showCharacters() {
  console.log("\n🏎️ Pilotos disponíveis:");
  characters.forEach((c, index) => {
    console.log(
      `${index + 1}. ${c.nome} (Vel: ${c.velocidade}, Curva: ${c.curva}, Agressividade: ${c.agressividade})`
    );
  });
  console.log("");
}

async function chooseCharacter(playerLabel) {
  while (true) {
    showCharacters();
    const answer = await ask(
      `➡️ ${playerLabel}, escolha um piloto (1-${characters.length}): `
    );
    const choice = Number(answer);

    if (!Number.isInteger(choice) || choice < 1 || choice > characters.length) {
      console.log("❌ Opção inválida. Tente novamente.\n");
      continue;
    }

    const selected = characters[choice - 1];

    // cria um novo objeto para o jogador
    return {
      nome: selected.nome,
      velocidade: selected.velocidade,
      curva: selected.curva,
      agressividade: selected.agressividade,
      pontos: 0,
    };
  }
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "Reta";
      break;
    case random < 0.66:
      result = "Curva";
      break;
    default:
      result = "Confronto";
  }
  return result;
}

async function logRollResult(characterName, blockLabel, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${blockLabel} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playPlaceEngine(character1, character2) {
  for (let round = 0; round < 5; round++) {
    console.log(`🚨 Rodada ${round + 1}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "Reta") {
      totalTestSkill1 = diceResult1 + character1.velocidade;
      totalTestSkill2 = diceResult2 + character2.velocidade;

      await logRollResult(character1.nome, "Velocidade", diceResult1, character1.velocidade);
      await logRollResult(character2.nome, "Velocidade", diceResult2, character2.velocidade);
    }

    if (block === "Curva") {
      totalTestSkill1 = diceResult1 + character1.curva;
      totalTestSkill2 = diceResult2 + character2.curva;

      await logRollResult(character1.nome, "Curva", diceResult1, character1.curva);
      await logRollResult(character2.nome, "Curva", diceResult2, character2.curva);
    }

    if (block === "Confronto") {
      let powerResult1 = diceResult1 + character1.agressividade;
      let powerResult2 = diceResult2 + character2.agressividade;

      console.log(`${character1.nome} confrontou com ${character2.nome}! 🥊`);

      await logRollResult(character1.nome, "Agressividade", diceResult1, character1.agressividade);
      await logRollResult(character2.nome, "Agressividade", diceResult2, character2.agressividade);

      if (powerResult1 > powerResult2 && character2.pontos > 0) {
        console.log(
          `💥 ${character1.nome} venceu o confronto! ${character2.nome} perde 1 ponto 👻`
        );
        character2.pontos--;
      }

      if (powerResult2 > powerResult1 && character1.pontos > 0) {
        console.log(
          `💥 ${character2.nome} venceu o confronto! ${character1.nome} perde 1 ponto 👻`
        );
        character1.pontos--;
      }

      console.log(powerResult1 === powerResult2 ? "Empate no confronto! Ninguém perde pontos." : "");
    }

    // verificando o vencedor (somente Reta/Curva contam pontos diretos)
    if (totalTestSkill1 > totalTestSkill2) {
      character1.pontos += 1;
      console.log(`🏆 ${character1.nome} marcou um ponto!`);
    } else if (totalTestSkill2 > totalTestSkill1) {
      character2.pontos += 1;
      console.log(`🏆 ${character2.nome} marcou um ponto!`);
    }

    console.log("-----------------------------------\n");
  }
}

async function declareWinner(character1, character2) {
  console.log(`🏁 Resultado Final:`);
  console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
  console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);

  if (character1.pontos > character2.pontos) {
    console.log(`\n🎉 ${character1.nome} é o vencedor! Parabéns 🏆`);
  } else if (character2.pontos > character1.pontos) {
    console.log(`\n🎉 ${character2.nome} é o vencedor! Parabéns 🏆`);
  } else {
    console.log(`\nA corrida terminou empatada! 🏁`);
  }
}

(async function main() {
  const player1 = await chooseCharacter("Jogador 1");
  const player2 = await chooseCharacter("Jogador 2");

  rl.close();

  console.log(`\n🏁 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`);

  await playPlaceEngine(player1, player2);

  await declareWinner(player1, player2);
})();