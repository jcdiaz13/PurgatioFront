import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CaractersCounter from "../../components/CaractersCounter";
import {
  Container,
  Textarea,
  ButtonContainer,
  Button,
  SubTitle,
  Scroll,
  ScrollContainer,
  ScrollText,
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
  const [isOpen, setIsOpen] = useState(false);
  const [contentToShow, setContentToShow] = useState(null);
  const [showContent, setShowContent] = useState(false); // Estado para controlar la visibilidad del contenido

  //Lista de palabras prohibidas
  const bannedWords = ["muerte"];

  // verificar si el texto contiene palabras prohibidas
  const containsBannedWords = (text) => {
    return bannedWords.some((word) =>
      text.toLowerCase().includes(word.toLowerCase())
    );
  };

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
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setContentToShow("sin");
      setTimeout(() => setShowContent(true), 300); // Mostrar contenido después de 300ms
    }, 1000); // Delay for 1 second
    return () => clearTimeout(timer);
  }, []);
  // Punishers

  const handleNext = async () => {
    // Verificación de entrada vacía
    if (sin === "") {
      alert("Introduzca un texto!!");
      return;
    }

    // Nueva verificación de palabras prohibidas
    if (containsBannedWords(sin)) {
      alert("El pecado contiene palabras prohibidas.");
      return;
    }

    setChangeButton(true);
    try {
      console.log(roomId, sin);
      await createSin(playerId, { sin: sin });
    } catch (error) {
      // Manejo de errores del backend
      if (error.response && error.response.status === 400) {
        alert(error.response.data); // Mostrar mensaje de error del backend
      } else {
        alert("Error al crear el pecado");
      }
    }
  };
  const handleEditSin = async () => {
    setChangeButton(false);
    await deleteSin(playerId);
  };

  return (
    <Theme>
      <Container>
        <ScrollContainer>
          <Scroll isOpen={isOpen}>
            <ScrollText className={showContent ? "fade-in" : ""}>
              {isOpen && contentToShow === "sin" && showContent && (
                <>
                  <SubTitle>¡Escribe tu pecado!</SubTitle>
                  <Textarea
                    type="text"
                    value={sin}
                    onChange={handleInputChange}
                    placeholder="Escribe sobre ti: una anécdota, un hábito o algo que harías, de lo cual quieras purgarte"
                    maxLength={300}
                  />
                  <CaractersCounter text={sin} maxLength={300} />{" "}
                </>
              )}
              <ButtonContainer>
                {changeButton && (
                  <Button onClick={handleEditSin}>Editar</Button>
                )}
                {!changeButton && <Button onClick={handleNext}>Enviar</Button>}
              </ButtonContainer>
            </ScrollText>
          </Scroll>
        </ScrollContainer>
      </Container>
    </Theme>
  );
}

export default Sins;
