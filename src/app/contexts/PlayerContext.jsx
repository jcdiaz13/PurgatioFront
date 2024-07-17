import { createContext, useState, useEffect } from "react";

export const PlayerContext = createContext();

// eslint-disable-next-line react/prop-types
export const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [players, setPlayers] = useState([]);
  const [playerId, setPlayerId] = useState(null);
  const [roomOwner, setRoomOwner] = useState(false);
  // const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    console.log("oooooooooooooooo", playerId);
  }, [playerId]); // Empty dependency array to ensure effect is only executed once
  return (
    <PlayerContext.Provider
      value={{
        playerName,
        setPlayerName,
        roomId,
        setRoomId,
        players,
        setPlayers,
        selectedAvatar,
        setSelectedAvatar,
        playerId,
        setPlayerId,
        roomOwner,
        setRoomOwner,
        // gameStarted,
        // setGameStarted,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
