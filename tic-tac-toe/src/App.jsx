import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "../data";
import GameOver from "./components/GameOver";

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const INITIAL_PLAYERS = { X: "Player 1", O: "Player 2" };

const derieveActivPlayer = (gameTurn) => {
  let playerSymbol = "X";
  playerSymbol = gameTurn.length > 0 && gameTurn[0].symbol === "X" ? "O" : "X";
  return playerSymbol;
};

const judgeGame = (board, players) => {
  for (const combie of WINNING_COMBINATIONS) {
    const first = board[combie[0].row][combie[0].col];
    const second = board[combie[1].row][combie[1].col];
    const third = board[combie[2].row][combie[2].col];

    if (first && first === second && first === third) return players[first];
  }
};

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [gameLog, setGameLog] = useState([]);
  // const [playerSymbol, setPlayerSymbol] = useState("X");

  let gameBoard = [...INITIAL_BOARD.map((arr) => [...arr])];
  // let gameBoard = initialBoard; // 배열 deep copy 필수! 객체이기 때문에 이전 값을 계속 가지고 있음

  for (const log of gameLog) {
    const { square, symbol } = log;
    const { row, col } = square;

    gameBoard[row][col] = symbol;
  }

  const winner = judgeGame(gameBoard, players);
  const draw = gameLog.length === 9 && !winner;

  const currentPlayer = derieveActivPlayer(gameLog);

  const handleSelectBox = (rowIdx, colIdx) => {
    // setPlayerSymbol((curPlayerSymbol) => (curPlayerSymbol === "X" ? "O" : "X"));

    // 이미 선택한 칸은 더이상 선택하지 못하도록 하는 로직
    // button의 disabled 옵션을 사용하면 더 간단하게 구현 가능!!
    // if (
    //   gameLog.some(
    //     (log) => log.square.row === rowIdx && log.square.col === colIdx
    //   )
    // )
    //   return;

    setGameLog((prevGameLog) => {
      const playerSymbol = derieveActivPlayer(prevGameLog);
      return [
        { square: { row: rowIdx, col: colIdx }, symbol: playerSymbol },
        ...prevGameLog,
      ];
    });
  };

  const handleChangePlayerName = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  };

  const handleRestart = () => {
    setGameLog([]);
  };

  return (
    <>
      <header>
        <img src="game-logo.png" alt="" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialPlayerName={INITIAL_PLAYERS.X}
              symbol="X"
              currentPlayer={currentPlayer}
              onChangeName={handleChangePlayerName}
            />
            <Player
              initialPlayerName={INITIAL_PLAYERS.O}
              symbol="O"
              currentPlayer={currentPlayer}
              onChangeName={handleChangePlayerName}
            />
          </ol>
          <GameBoard
            gameBoard={gameBoard}
            handleSelectBox={handleSelectBox}
          ></GameBoard>
          {(winner || draw) && (
            <GameOver winner={winner} draw={draw} onRestart={handleRestart} />
          )}
        </div>
        <Log gameLog={gameLog} />
      </main>
    </>
  );
}

export default App;
