import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Textarea, ButtonContainer, Button } from './Punishments.styles';
import { FaArrowLeft } from 'react-icons/fa';
import sinsData from '../../app/jsons/gameMastersSins.json';
import punishmentsData from '../../app/jsons/gameMasters.json';

const Punishments = () => {

  const [randomPunishment, setRandomPunishment] = useState('');
  const [randomSin, setRandomSin] = useState('');
  const [isTextareaModified, setIsTextareaModified] = useState(false);
  const navigate = useNavigate();
  const suggest = `Sugerencia: ${randomPunishment}`;

  useEffect(() => {
    // Función para seleccionar una frase aleatoria
    const getRandomSin = () => {
      const randomCategory = sinsData[Math.floor(Math.random() * sinsData.length)];
      const randomSin = randomCategory.sins[Math.floor(Math.random() * randomCategory.sins.length)];
      return randomSin;
    };
    setRandomSin(getRandomSin());
  }, []);

  useEffect(() => {
    // Función para seleccionar un castigo aleatorio
    const getRandomPunishment = () => {
      const randomCategory = punishmentsData[Math.floor(Math.random() * punishmentsData.length)];
      const randomPunishment = randomCategory.punishments[Math.floor(Math.random() * randomCategory.punishments.length)];
      return randomPunishment;
    };
    setRandomPunishment(getRandomPunishment());
  }, []);

  const handlePunishmentChange = (e) => {
    setRandomPunishment(e.target.value);
    setIsTextareaModified(true); // Marca como modificado al cambiar el texto
  };

  const handleGoToSins = () => {
    navigate('/sins');
  };

  const handleNext = () => {
    if (!isTextareaModified) {
      alert("Por favor, modifique el texto antes de continuar.");
      return;
    }
    navigate('/');
  };

  return (
    <Container>
      <FormContainer>
        <h1>Castigos</h1>
        <p>{randomSin}</p>
        <Textarea

          onChange={handlePunishmentChange}
          placeholder={suggest}
        />
        <ButtonContainer>
          <Button onClick={handleGoToSins}><FaArrowLeft /> Volver</Button>
          <Button onClick={handleNext}>Enviar</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Punishments;
