import { useNavigate } from "react-router-dom";
import { Container, Title, ButtonContainer, Button, Logo } from "./Home.styles";

function Home() {
  const navigate = useNavigate();

  const handleCreateLobby = () => {
    navigate("/createlobby");
  };

  const handleJoinLobby = () => {
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
