import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  FormContainer,
  Input,
  ButtonContainer,
  Button,
} from "./Home.styles";
import { PlayerContext } from "../../app/contexts/PlayerContext";

function Home() {
  const { playerName, setPlayerName } = useContext(PlayerContext);
  const navigate = useNavigate();

  const handleCreateLobby = () => {
    const trimmedName = playerName.trim(); //Método trim()  quita los espacios del principio y el final del nombre y no permite el acceso si el input está vacío
    if (trimmedName) {
      setPlayerName(trimmedName);
      console.log(playerName);
      navigate("/createlobby");
    } else {
      alert("Por favor ingrese un nombre antes de continuar.");
    }
  };

  const handleJoinLobby = () => {
    const trimmedName = playerName.trim();
    if (trimmedName) {
      setPlayerName(trimmedName);
      navigate("/joinlobby");
    } else {
      alert("Por favor ingrese un nombre antes de continuar.");
    }
  };

  const handleInputChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <Container>
      <Title>HOME</Title>
      <FormContainer>
        <h2>Nombre del jugador</h2>
        <Input type="text" value={playerName} onChange={handleInputChange} />
        <ButtonContainer>
          <Button onClick={handleJoinLobby}>Unirse a sala</Button>
          <Button onClick={handleCreateLobby}>Crear sala</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Home;
