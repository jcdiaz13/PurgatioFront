import React from "react";
import {
  Container,
  Title,
  FormContainer,
  Label,
  Input,
  ButtonContainer,
  StyledLink,
  Button,
} from "./Home.styles";

function Home() {
  return (
    <Container>
      <Title>HOME</Title>
      <FormContainer>
        <h2>Nombre del jugador</h2>
        <Input type="text" />
        <ButtonContainer>
          <StyledLink to="/joinlobby">
            <Button>Crear sala</Button>
          </StyledLink>
          <StyledLink to="/createlobby">
            <Button>Unirse a sala</Button>
          </StyledLink>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Home;
