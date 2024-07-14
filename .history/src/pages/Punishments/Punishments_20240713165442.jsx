import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Textarea,
  ButtonContainer,
  Button,
} from "./Punishments.styles";
import { FaArrowLeft } from "react-icons/fa";
import sinsData from "../../app/jsons/gameMastersSins.json";
import punishmentsData from "../../app/jsons/gameMasters.json";
import Theme from '../../components/Theme';
import { AssignSins } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext';

const Punishments = () => {
  // const [randomPunishment, setRandomPunishment] = useState("");
  // const [randomSin, setRandomSin] = useState("");
  const [isTextareaModified, setIsTextareaModified] = useState(false);
  const navigate = useNavigate();
  // const suggest = `Sugerencia: ${randomPunishment}`;
  const { roomId, playerId } = useContext(PlayerContext);
  const [assignSin, setAssignSin] = useState("");


  // useEffect(() => {
  //   // Función para seleccionar una frase aleatoria
  //   const getRandomSin = () => {
  //     const randomCategory =
  //       sinsData[Math.floor(Math.random() * sinsData.length)];
  //     const randomSin =
  //       randomCategory.sins[
  //       Math.floor(Math.random() * randomCategory.sins.length)
  //       ];
  //     return randomSin;
  //   };
  //   setRandomSin(getRandomSin());
  // }, []);

  // useEffect(() => {
  //   // Función para seleccionar un castigo aleatorio
  //   const getRandomPunishment = () => {
  //     const randomCategory =
  //       punishmentsData[Math.floor(Math.random() * punishmentsData.length)];
  //     const randomPunishment =
  //       randomCategory.punishments[
  //       Math.floor(Math.random() * randomCategory.punishments.length)
  //       ];
  //     return randomPunishment;
  //   };
  //   setRandomPunishment(getRandomPunishment());
  // }, []);

  useEffect(() => {
    ShowSins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, playerId]);

  const ShowSins = async () => {
    const response = await AssignSins(roomId);
    console.log(response, 33333);
    const playerAssignment = response.find(
      assignment => assignment.autor.id === playerId
    );
    if (playerAssignment) {
      setAssignSin(playerAssignment.autor.sin);
    }
  };

  // const handlePunishmentChange = (e) => {
  //   setRandomPunishment(e.target.value);
  //   setIsTextareaModified(true); // Marca como modificado al cambiar el texto
  // };

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
          <h1>Pecado</h1>
          {assignSin}
          <h1>Castigos</h1>
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
}

export default Punishments;
