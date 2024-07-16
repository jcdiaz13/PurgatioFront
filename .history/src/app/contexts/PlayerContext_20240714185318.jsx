import { createContext, useState } from 'react';

export const PlayerContext = createContext();

// eslint-disable-next-line react/prop-types
export const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [players, setPlayers] = useState([])
  const [playerId, setPlayerId] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <PlayerContext.Provider value={{ playerName, setPlayerName, roomId, setRoomId, players, setPlayers, selectedAvatar, setSelectedAvatar, playerId, setPlayerId, gameStarted, setGameStarted }}>
      {children}
    </PlayerContext.Provider>
  );
};
