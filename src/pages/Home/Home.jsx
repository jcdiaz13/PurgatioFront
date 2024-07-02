import { useNavigate } from "react-router-dom";
import { Container, Title, ButtonContainer, Button} from "./Home.styles";

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
      <Title>PUNISH <br /> GAME</Title>
     
      <ButtonContainer>
        <Button onClick={handleCreateLobby}>Crear sala</Button>
        <Button onClick={handleJoinLobby}>Unirse a sala</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Home;
