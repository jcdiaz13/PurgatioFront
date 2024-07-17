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
// import sinsData from "../../app/jsons/gameMastersSins.json";
// import punishmentsData from "../../app/jsons/gameMasters.json";
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
      ShowSins();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, playerId]);

  //ESTA FUNCION DEVUELVE EL PRIMER OBJETO QUE CUMPLA CON LA CONDICION DE QUE EL AUTOR ES EL JUGADOR, Y ALMACENAS EL PECADO DEL DESTINATAIO EN EL ESTADO .
  const ShowSins = async () => {
    const response = await AssignSins(roomId);
    console.log(response, 33333, playerId);
    const playerAssignment = response.find(

      assignment => {
        console.log(assignment.autor.id + " asfiafsaf " + playerId)
        return assignment.autor.id === playerId
      }
    );
    if (playerAssignment) {
      setAssignSin(playerAssignment.destinatario.sin);
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
          <Title>Pecado</Title>
          {
            console.log('22222222222222222222222', assignSin)
          }
          {assignSin} {/* ESTADO QUE CONTIENE EL PECADO DEL DESTINATARIO */}
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
}

export default Punishments;
