import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Textarea,
  ButtonContainer,
  Button,
  Title,
  SubTitle,
} from "./Punishments.styles";
import { FaArrowLeft } from "react-icons/fa";
import Theme from '../../components/Theme';
import { getPlayersWithAssign } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext';

const Punishments = () => {
  const [isTextareaModified, setIsTextareaModified] = useState(false);
  const navigate = useNavigate();
  const { roomId, playerId, setPlayers } = useContext(PlayerContext);
  const [assignSin, setAssignSin] = useState("");

  /*  ESTO LO COMENTO, PERO PARA LOS OTROS MODOS HABRA QUE USARLO
      useEffect(() => {
      // Función para seleccionar una frase aleatoria
      const getRandomSin = () => {
        const randomCategory =
          sinsData[Math.floor(Math.random() * sinsData.length)];
        const randomSin =
          randomCategory.sins[
          Math.floor(Math.random() * randomCategory.sins.length)
          ];
        return randomSin;
      };
      setRandomSin(getRandomSin());
    }, []);
  
    useEffect(() => {
      // Función para seleccionar un castigo aleatorio
      const getRandomPunishment = () => {
        const randomCategory =
          punishmentsData[Math.floor(Math.random() * punishmentsData.length)];
        const randomPunishment =
          randomCategory.punishments[
          Math.floor(Math.random() * randomCategory.punishments.length)
          ];
        return randomPunishment;
      };
      setRandomPunishment(getRandomPunishment());
    }, []); */

  useEffect(() => {
    if (roomId && playerId) {
      showJudgeSin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, playerId]);

  const showJudgeSin = async () => {
    const response = await getPlayersWithAssign(roomId);
    setPlayers(response.data);
    console.log("Players:", response.data);

    // Encuentra al jugador actual
    const player = response.data.find(player => player.id === playerId);
    console.log("Jugador actual:", player);

    if (player) {
      // Encuentra al jugador que el jugador actual debe juzgar
      const judgePlayer = response.data.find(judge => judge.id === player.judgeSin);
      console.log("Jugador que tengo que juzgar:", judgePlayer);

      if (judgePlayer) {
        setAssignSin(judgePlayer.sin);
      }
    }
  };


  const handleGoToSins = () => {
    navigate("/sins");
  };

  const handleNext = () => {
    if (!isTextareaModified) {
      alert("Por favor, modifique el texto antes de continuar.");
      return;
    }
    navigate("/");
  };

  return (
    <Theme>
      <Container>
        <FormContainer>
          <Title>Pecado</Title>
          {console.log('Pecado asignado:', assignSin)}
          {assignSin}
          <SubTitle>Castigos</SubTitle>
          {/* <p>{randomSin}</p> */}
          <Textarea />
          {/* onChange={handlePunishmentChange} placeholder={suggest} en text area */}
          <ButtonContainer>
            <Button onClick={handleGoToSins}>
              {" "}
              <FaArrowLeft />
            </Button>
            <Link to="/verdict">
              <Button>Enviar</Button>
            </Link>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
};

export default Punishments;

