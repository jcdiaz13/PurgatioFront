import React from "react";
import {
  Container,
  Title,
  FormContainer,
  Label,
  Input,
  ButtonContainer,
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
          <Button>Crear sala</Button>
          <Button>Unirse a sala</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Home;
