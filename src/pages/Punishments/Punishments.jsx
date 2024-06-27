import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, FormContainer, Input, ButtonContainer, Button, ButtonTrash } from './Punishments.styles';
import { FaTrashAlt, FaArrowLeft } from 'react-icons/fa';


const Punishments = () => {
  const location = useLocation();
  const { text } = location.state || { text: '' }; // Texto introducido por el usuario
  const [punishment, setPunishment] = useState('');
  const navigate = useNavigate();

  const handlePunishmentChange = (e) => {
    setPunishment(e.target.value);
  };

  const handleClearPunishment = () => {
    setPunishment("");
  };

  const handleGoToSins = () => {
    navigate('/sins');
  };

  return (
    <Container>
      <FormContainer>
        <h1>Castigos</h1>
        <p>Texto introducido: {text}</p>
        <Input
          type="text"
          value={punishment}
          onChange={handlePunishmentChange}
          placeholder="Escribe un castigo"
        />
        <ButtonContainer>

          <Button onClick={handleGoToSins}> <FaArrowLeft /></Button>
          <ButtonTrash onClick={handleClearPunishment}>
            <FaTrashAlt />
          </ButtonTrash>
          <Link to="/verdict">
          <Button >Enviar</Button>
          </Link>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Punishments;
