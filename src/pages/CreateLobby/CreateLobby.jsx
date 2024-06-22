import { useContext } from "react";
import {
  Container,
  Title,
  FormContainer,
  Input,
  ButtonContainer,
  StyledLink,
  Button,
  AvatarContainer,
} from "./CreateLobby.styles";
import { PlayerContext } from "../../app/contexts/PlayerContext";

function CreateLobby() {
  const { playerName } = useContext(PlayerContext); // Obtener el nombre del jugador desde el contexto

  return (
    <Container>
      <FormContainer>
        <Title>Crea nueva sala </Title>
        <h2>Selecciona un avatar</h2>
        <AvatarContainer>Avatar</AvatarContainer>
        <h2>{playerName}</h2>
        <Input type="text" placeholder="Introduce el número de sala" />
        <ButtonContainer>
          <StyledLink to="/">
            <Button>Volver</Button>
          </StyledLink>
          <StyledLink to="/lobby">
            <Button>Jugar</Button>
          </StyledLink>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default CreateLobby;
