export default function Log({ gameLog }) {
  return (
    <ol id="log">
      {gameLog.map((log, logIdx) => (
        <li className="highlighted" key={logIdx}>
          {log.square.row} {log.square.col} - {log.symbol}
        </li>
      ))}
    </ol>
  );
}
