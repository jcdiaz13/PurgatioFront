import { createContext, useState } from 'react';

export const PlayerContext = createContext();

// eslint-disable-next-line react/prop-types
export const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [roomId, setRoomId] = useState(null);
  const [admin, setAdmin] = useState(false);


  return (
    <PlayerContext.Provider value={{ playerName, setPlayerName, roomId, setRoomId, admin, setAdmin }}>
      {children}
    </PlayerContext.Provider>
  );
};
