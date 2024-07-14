import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormContainer, Textarea, ButtonContainer, Button } from "./Punishments.styles";
import { FaArrowLeft } from "react-icons/fa";
import Theme from '../../components/Theme';
import { PlayerContext } from '../../app/contexts/PlayerContext';

const Punishments = () => {
  const [randomSin, setRandomSin] = useState("");
  const [isTextareaModified, setIsTextareaModified] = useState(false);
  const navigate = useNavigate();
  const { setPunishments } = useContext(PlayerContext);

  useEffect(() => {
    // Simulate fetching a random sin
    const fetchRandomSin = async () => {
      const simulatedSin = "Simulated sin from API";
      setRandomSin(simulatedSin);
    };

    fetchRandomSin();
  }, []);

  const handlePunishmentChange = (e) => {
    setIsTextareaModified(true);
    setPunishments(prev => [...prev, e.target.value]); // Guardar el castigo en el contexto
  };

  const handleGoToSins = () => {
    navigate("/sins");
  };

  const handleNext = () => {
    if (!isTextareaModified) {
      alert("Por favor, modifique el texto antes de continuar.");
      return;
    }
    navigate("/verdict");
  };

  return (
    <Theme>
      <Container>
        <FormContainer>
          <h1>Castigos</h1>
          <p>{randomSin}</p>
          <Textarea onChange={handlePunishmentChange} />
          <ButtonContainer>
            <Button onClick={handleGoToSins}><FaArrowLeft /></Button>
            <Link to="/verdict"><Button>Enviar</Button></Link>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
};

export default Punishments;
