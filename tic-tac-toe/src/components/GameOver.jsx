export default function GameOver({ winner, draw, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} WIN!</p>}
      {draw && <p>DRAW!</p>}
      <button onClick={onRestart}>Replay</button>
    </div>
  );
}
