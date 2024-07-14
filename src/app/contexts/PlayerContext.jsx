import { createContext, useState } from 'react';

export const PlayerContext = createContext();

// eslint-disable-next-line react/prop-types
export const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [players, setPlayers] = useState([]);
  const [playerId, setPlayerId] = useState(null);
  const [sins, setSins] = useState(null);
  const [punishments, setPunishments] = useState([]);

  return (
    <PlayerContext.Provider value={{
      playerName, setPlayerName,
      roomId, setRoomId,
      admin, setAdmin,
      players, setPlayers,
      selectedAvatar, setSelectedAvatar,
      playerId, setPlayerId,
      sins, setSins,
      punishments, setPunishments
    }}>
      {children}
    </PlayerContext.Provider>
  );
};
