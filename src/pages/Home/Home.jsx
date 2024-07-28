import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ButtonContainer, Button, Logo } from "./Home.styles";
import { PlayerContext } from "../../app/contexts/PlayerContext";

function Home() {
  const navigate = useNavigate();
  const { setMusicStarted } = useContext(PlayerContext); // Desestructurar setMusicStarted desde el contexto

  const handleCreateLobby = () => {
    // setMusicStarted(true);
    navigate("/createlobby");
  };

  const handleJoinLobby = () => {
    // setMusicStarted(true);
    navigate("/joinlobby");
  };

  return (
    <Container>
      <Logo />
      <ButtonContainer>
        <Button onClick={handleCreateLobby}>Crear sala</Button>
        <Button onClick={handleJoinLobby}>Unirse a sala</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Home;
