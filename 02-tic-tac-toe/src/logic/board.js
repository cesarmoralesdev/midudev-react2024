import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; //x u o
    }
  }
  //si no hay ganador
  return null;
};
export const checkEndGame = (boardToCheck) => {
  //revisamos si no hay mas espacios libres
  return boardToCheck.every((square) => square !== null);
};
