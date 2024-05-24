import { useState } from "react";

export default function Player ({initialName, symbol, isActive, onChangeName}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick () {
        setIsEditing(editing => !editing);
        if (isEditing){
            onChangeName(symbol, playerName);
        }
    };
    function handleChange ({target}) {setPlayerName(target.value)}

    let editablePlayerName;
    editablePlayerName = !isEditing ? (
        <span className="player-name">{playerName}</span>
    ) : (
        <input type="text" required value={playerName} onChange={handleChange}/>
    );

    let btnCaption;
    btnCaption = !isEditing ? "Edit" : "Save";

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}