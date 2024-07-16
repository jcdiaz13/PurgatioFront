import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormContainer, Textarea, ButtonContainer, Button, Title, SubTitle } from "./Punishments.styles";
import { FaArrowLeft } from "react-icons/fa";
import Theme from '../../components/Theme';
import { PlayerContext } from '../../app/contexts/PlayerContext';
import { AssignSins } from '../../app/services/player';

const Punishments = () => {
  const [randomSin, setRandomSin] = useState("");
  const [isTextareaModified, setIsTextareaModified] = useState(false);
  const [assignSin, setAssignSin] = useState("");
  const navigate = useNavigate();
  const { roomId, playerId, setPunishments } = useContext(PlayerContext);

  useEffect(() => {
    // Simulate fetching a random sin
    const fetchRandomSin = async () => {
      const simulatedSin = "Simulated sin from API"; // Replace with real API call
      setRandomSin(simulatedSin);
    };
    fetchRandomSin();
  }, []);

  useEffect(() => {
    if (roomId && playerId) {
      ShowSins();
    }
  }, [roomId, playerId]);

  const ShowSins = async () => {
    const response = await AssignSins(roomId);
    const playerAssignment = response.find(assignment => assignment.autor.id === playerId);
    if (playerAssignment) {
      setAssignSin(playerAssignment.destinatario.sin);
    }
  };

  const handlePunishmentChange = (e) => {
    setIsTextareaModified(true);
    setPunishments(prev => [...prev, e.target.value]);
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
          <Title>Pecado</Title>
          <p>{assignSin}</p> {/* Display the sin of the recipient */}
          <SubTitle>Castigos</SubTitle>
          <Textarea onChange={handlePunishmentChange} placeholder={`Sugerencia: ${randomSin}`} />
          <ButtonContainer>
            <Button onClick={handleGoToSins}><FaArrowLeft /></Button>
            <Button onClick={handleNext}>Enviar</Button>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
};

export default Punishments;
