import { LobbyContainer, CirclesContainer, Circle } from "./Lobby.styles";

const Lobby = () => {
  return (
    <LobbyContainer>
      <CirclesContainer>
        <h1>ELIGE TU DESTINO</h1>
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
