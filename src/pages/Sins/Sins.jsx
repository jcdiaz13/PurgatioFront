import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Textarea, ButtonContainer, Button, Title, SubTitle } from './Sins.styles';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import sinsData from '../../app/jsons/gameMastersSins.json';
import Theme from '../../components/Theme';

function Sins() {
  const [text, setText] = useState("")
  const navigate = useNavigate();
  const [randomSin, setRandomSin] = useState("");
  const suggest = `Sugerencia: ${randomSin}`;

  useEffect(() => {
    // Función para seleccionar una frase aleatoria
    const getRandomSin = () => {
      const randomCategory = sinsData[Math.floor(Math.random() * sinsData.length)];
      const randomSin = randomCategory.sins[Math.floor(Math.random() * randomCategory.sins.length)];
      return randomSin;
    };

    setRandomSin(getRandomSin());
  }, []);

  const handleInputChange = (e) => {
    // setRandomSin(e.target.value);
    setText(e.target.value);
  };


  // Punishers
  const handleNext = () => {
    if (text === "") {
      alert("Introduzca un texto!!");
      return;
    }
    navigate('/punishments');
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
          {/* <textarea id="descriptionEvent" rows={10} cols={50} /> */}
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
