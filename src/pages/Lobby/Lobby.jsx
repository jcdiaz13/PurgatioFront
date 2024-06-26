import { LobbyContainer, CirclesContainer, Circle } from "./Lobby.styles";
import { useContext } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";

const Lobby = () => {
  const { playerName } = useContext(PlayerContext); // Obtener el nombre del jugador desde el contexto

  return (
    <LobbyContainer>
      <CirclesContainer>
        <h1>{playerName}, escoge el modo de juego </h1>
        <Circle>
          <h2>VERDUGO</h2>
        </Circle>
        <Circle>
          <h2>MAGO</h2>
        </Circle>
        <Circle>
          <h2>HADA</h2>
        </Circle>
      </CirclesContainer>
    </LobbyContainer>
  );
};

export default Lobby;
