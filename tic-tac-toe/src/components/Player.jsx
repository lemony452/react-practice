import { useState } from "react";

export default function Player({
  initialPlayerName,
  symbol,
  currentPlayer,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit((edit) => !edit);
    if (isEdit) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChangeName = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={currentPlayer === symbol ? "active" : ""}>
      <span className="player">
        {!isEdit ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChangeName}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEdit ? "SAVE" : "EDIT"}</button>
    </li>
  );
}
