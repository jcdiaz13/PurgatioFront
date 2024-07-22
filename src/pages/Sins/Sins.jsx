import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Textarea,
  ButtonContainer,
  Button,
  Title,
  SubTitle,
} from "./Sins.styles";
// import sinsData from '../../app/jsons/gameMastersSins.json';
import Theme from "../../components/Theme";
import {
  createSin,
  getPlayersWithoutSin,
  getPlayersWithAssign,
  assignSins,
  deleteSin,
} from "../../app/services/player";
import { PlayerContext } from "../../app/contexts/PlayerContext"; // Ajusta la ruta según donde tengas PlayerContext

function Sins() {
  const [sin, setSin] = useState("");
  const navigate = useNavigate();
  const [changeButton, setChangeButton] = useState(false);
  const { playerId, roomId, setPlayers, roomOwner } = useContext(PlayerContext);
  const [requestOneTime, setRequestOneTime] = useState(false);

  const checkPlayersWithoutSin = async () => {
    const response = await getPlayersWithoutSin(roomId);
    const playersWithoutSin = response.data;
    return playersWithoutSin.length === 0;
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const allPlayersDone = await checkPlayersWithoutSin();
      if (allPlayersDone) {
        if (!requestOneTime) {
          if (roomOwner) {
            setRequestOneTime(true);
            await assignSins(roomId);
          }
        }

        const response = await getPlayersWithAssign(roomId);
        if (response.data[0].judgeSin != 0) {
          setPlayers(response.data);
          navigate("/punishments");
        }
      }
    }, 2000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeButton]);

  const handleInputChange = (e) => {
    setSin(e.target.value);
  };

  // Punishers
  const handleNext = async () => {
    if (sin === "") {
      alert("Introduzca un texto!!");
      return;
    }
    setChangeButton(true);
    try {
      console.log(roomId, sin);
      await createSin(playerId, { sin: sin });
    } catch (error) {
      console.error("Error al crear el pecado:", error);
    }
  };

  const handleEditSin = async () => {
    setChangeButton(false);
    await deleteSin(playerId);
  };

  return (
    <Theme>
      <Container>
        <FormContainer>
          <Title>Pecado</Title>
          <SubTitle>Escribe tu pecado:</SubTitle>
          <Textarea
            type="text"
            value={sin}
            onChange={handleInputChange}
            placeholder="Escribe una anecdota que te haya ocurrido chunga o algo que harias"
          />
          <ButtonContainer>
            {changeButton && <Button onClick={handleEditSin}>Editar</Button>}
            {!changeButton && <Button onClick={handleNext}>Enviar</Button>}
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
}

export default Sins;
