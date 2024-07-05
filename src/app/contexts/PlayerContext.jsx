import { createContext, useState } from 'react';

export const PlayerContext = createContext();

// eslint-disable-next-line react/prop-types
export const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [players, setPlayers] = useState([])

  return (
    <PlayerContext.Provider value={{ playerName, setPlayerName, roomId, setRoomId, admin, setAdmin, players, setPlayers, selectedAvatar, setSelectedAvatar }}>
      {children}
    </PlayerContext.Provider>
  );
};
