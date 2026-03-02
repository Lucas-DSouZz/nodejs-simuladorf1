# Simulador de Corridas da Formula 1 com Node.js

Este projeto apresenta uma simulação de corrida de Fórmula 1, onde o desempenho dos competidores é influenciado tanto por suas habilidades individuais quanto pelas condições variáveis da pista. A aplicação foi desenvolvida com Node.js, aplicando conceitos de lógica, aleatoriedade e estruturação de regras de negócio.

<table>
        <tr>
            <td>
                <img src="./docs/F1Logo.jpg" alt="F1Logo" width="700">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Este projeto consiste na criação de um simulador de corrida inspirado na Fórmula 1. O desafio é desenvolver a lógica de um jogo de corrida em Node.js, onde pilotos da temporada atual disputam voltas utilizando atributos como Velocidade, Curva e Agressividade.</p>
            </td>
        </tr>
    </table>

<h2>Pilotos</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Lewis Hamilton</p>
                <img src="./docs/LewisHamilton2025.jpg" alt="Lewis Hamilton - F1 Driver" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Curva: 5</p>
                <p>Agressividade: 5</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Max Verstappen</p>
                <img src="./docs/MaxVerstappen2025.jpg" alt="Max Verstappen - F1 Driver" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Curva: 5</p>
                <p>Agressividade: 5</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Charles Leclerc</p>
                <img src="./docs/CharlesLeclerc2025.jpg" alt="Charles Leclerc - F1 Driver" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Curva: 4</p>
                <p>Agressividade: 4</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Lando Norris</p>
                <img src="./docs/LandoNorris2025.jpg" alt="Lando Norris - F1 Driver" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Curva: 4</p>
                <p>Agressividade: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Fernando Alonso</p>
                <img src="./docs/FernandoAlonso2025.jpg" alt="Fernando Alonso - F1 Driver" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Curva: 4</p>
                <p>Agressividade: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Carlos Sainz</p>
                <img src="./docs/CarlosSainz2025.jpg" alt="Carlos Sainz - F1 Driver" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Curva: 3</p>
                <p>Agressividade: 3</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<label for="jogadores-item">O Computador deve receber dois pilotos para disputar a corrida em um objeto cada, onde cada jogador escolhe seu próprio piloto.</label>

<b>Corrida:</b>

<ul>
  <li> <label for="pistas-1-item">Os pilotos irão correr em uma corrida aleatória de 5 rodadas</label></li>
  <li> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo CURVA, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo AGRESSIVIDADE, quem perder, perde um ponto</label></li>
      <li><label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

## Tecnologias Utilizadas

- JavaScript.
- NodeJs.
