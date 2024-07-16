import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Textarea, ButtonContainer, Button, Title, SubTitle } from './Sins.styles';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Theme from '../../components/Theme';
import { createSin, getPlayersWithoutSin } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext';

function Sins() {
  const [text, setText] = useState("");
  const [randomSin, setRandomSin] = useState("");
  const navigate = useNavigate();
  const { playerId, roomId, setSins } = useContext(PlayerContext);
  const suggest = `Sugerencia: ${randomSin}`;

  useEffect(() => {
    const getRandomSin = () => {
      const randomCategory = sinsData[Math.floor(Math.random() * sinsData.length)];
      const randomSin = randomCategory.sins[Math.floor(Math.random() * randomCategory.sins.length)];
      return randomSin;
    };
    setRandomSin(getRandomSin());
  }, []);

  const checkPlayersWithoutSin = async () => {
    const response = await getPlayersWithoutSin(roomId);
    return response.data.length === 0;
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const allPlayersDone = await checkPlayersWithoutSin();
      if (allPlayersDone) {
        navigate('/punishments');
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [roomId, navigate]);

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
      setSins({ sin: text });
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
          <Textarea
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder={suggest}
          />
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
