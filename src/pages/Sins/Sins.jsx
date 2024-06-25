import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Input, ButtonContainer, Button, ButtonTrash, Title } from './Sins.styles';
import { FaTrashAlt } from 'react-icons/fa';

function Sins() {
  const [text, setText] = useState("¿Cuál es el colmo de Aladdín? Tener mal genio.");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleClearText = () => {
    setText("");
  };
  // Punishers
  const handleNext = () => {
    if (text === "") {
      alert("Introduzca un texto!!");
      return;
    }
    navigate('/punishments');
  };

  return (
    <Container>
      <FormContainer>
        <Title>Pecados</Title>
        <Input type="text" value={text} onChange={handleInputChange} placeholder="Introduce un texto" />
        <ButtonContainer>
          <ButtonTrash onClick={handleClearText}>
            <FaTrashAlt />
          </ButtonTrash>
          <Button onClick={handleNext}>Siguiente</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Sins;
