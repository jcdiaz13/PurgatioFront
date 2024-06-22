import {
  Container,
  Title,
  FormContainer,
  Input,
  ButtonContainer,
  StyledLink,
  Button,
  AvatarContainer,
} from "./JoinLobby.styles";

function JoinLobby() {
  return (
    <Container>
      <Title>Unirse a una sala</Title>
      <FormContainer>
        <h2>Selecciona un avatar</h2>
        <AvatarContainer>Avatar</AvatarContainer>
        <h2>Nº de Sala</h2>
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

export default JoinLobby;
