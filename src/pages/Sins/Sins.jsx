import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Textarea, ButtonContainer, Button, Title, SubTitle } from './Sins.styles';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import sinsData from '../../app/jsons/gameMastersSins.json';
import Theme from '../../components/Theme';
import { createSin } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext';

function Sins() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [randomSin, setRandomSin] = useState("");
  const suggest = `Sugerencia: ${randomSin}`;
  const { playerId, setSins } = useContext(PlayerContext);

  useEffect(() => {
    const getRandomSin = () => {
      const randomCategory = sinsData[Math.floor(Math.random() * sinsData.length)];
      const randomSin = randomCategory.sins[Math.floor(Math.random() * randomCategory.sins.length)];
      return randomSin;
    };
    setRandomSin(getRandomSin());
  }, []);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleNext = async () => {
    if (text === "") {
      alert("Introduzca un texto!!");
      return;
    }

    try {
      await createSin(playerId, { sin: text });
      setSins({ sin: text }); // Guardar el pecado en el contexto
      navigate('/punishments');
    } catch (error) {
      console.error("Error al crear el pecado:", error);
    }
  };

  const handleGoLobby = () => {
    navigate('/lobby');
  };

  return (
    <Theme>
      <Container>
        <FormContainer>
          <Title>Pecados</Title>
          <SubTitle>Escribe uno de tus pecados:</SubTitle>
          <Textarea type="text" value={text} onChange={handleInputChange} placeholder={suggest} />
          <ButtonContainer>
            <Button onClick={handleGoLobby}><FaArrowLeft /></Button>
            <Button onClick={handleNext}><FaArrowRight /></Button>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
}

export default Sins;
