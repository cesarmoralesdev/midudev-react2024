import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import { TURNS, WINNER_COMBOS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameStorage, resetGameStorage } from "./logic/storage";

function App() {
  console.log("render");

  const [board, setBoard] = useState(() => {
    console.log("inicializa estado board");
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  //null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    //Hacer esto esta mal, porque no tenemos que mutar nunca, ni las prop ni el estado
    // board[index] = turn;
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn; //x u o
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Guardar partida
    saveGameStorage({ board: newBoard, turn: newTurn });

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      // setWinner((prevWinner) => {
      //   console.log(`Ganador ${newWinner}, el anterior era ${prevWinner}`);
      //   return newWinner;
      // });
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      //TODO: revisar si hay empate
      setWinner(false);
    }
  };
  const resetGame = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    resetGameStorage();
  };

  useEffect(() => {
    console.log("useEffect");
  }, [winner]);

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar denuevo</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
