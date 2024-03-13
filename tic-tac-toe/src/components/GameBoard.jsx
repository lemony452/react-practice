export default function GameBoard({ gameBoard, handleSelectBox }) {
  //   const [gameBoard, setGameBoard] = useState(initialBoard);

  //   const handleClick = (rowIdx, colIdx) => {
  //     setGameBoard((prevBoard) => {
  //       const updatedBoard = [...prevBoard.map((inner) => [...inner])];
  //       updatedBoard[rowIdx][colIdx] = playerSymbol;
  //       return updatedBoard;
  //     });

  //     handleSelectBox();
  //   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => handleSelectBox(rowIdx, colIdx)}
                  disabled={playerSymbol !== null ? true : false}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
