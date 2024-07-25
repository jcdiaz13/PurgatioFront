import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Textarea,
  ButtonContainer,
  Button,
  SubTitle,
  Scroll,
  ScrollContainer,
  ToggleButton,
  ScrollText,
  Sin,
} from "./Punishments.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import {
  createPunish,
  getPlayersWithoutPunish,
  deletePunish,
} from "../../app/services/player";
//Alerts
import Alert from "../../components/Alert"

const Punishments = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { roomId, playerId, players, setPlayers } = useContext(PlayerContext);
  const [assignSin, setAssignSin] = useState("");
  const [changeButton, setChangeButton] = useState(false);
  const [judgePlayerId, setJudgePlayerId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [contentToShow, setContentToShow] = useState(null);
  const [showContent, setShowContent] = useState(false); // Estado para controlar la visibilidad del contenido
  const [alerts, setAlerts] = useState([]);

  //Lista de palabras prohibidas
  const bannedWords = ["muerte"];

  // verificar si el texto contiene palabras prohibidas
  const containsBannedWords = (text) => {
    return bannedWords.some((word) =>
      text.toLowerCase().includes(word.toLowerCase())
    );
  };

  const checkPlayersWithoutPunish = async () => {
    const response = await getPlayersWithoutPunish(roomId);
    const playersWithoutPunish = response.data;
    return playersWithoutPunish.length === 0;
  };
  const showAlert = (type, message) => {
    const id = new Date().getTime();
    setAlerts([...alerts, { id, type, message }]);
    setTimeout(() => removeAlert(id), 3000); // Remover alerta después de 3 segundos
  };

  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };


  useEffect(() => {
    const intervalId = setInterval(async () => {
      const allPlayersDone = await checkPlayersWithoutPunish();
      if (allPlayersDone) {
        console.log("No shuffled: ", players);
        if (shuffleArrayPlayers()) {
          console.log("Shuffled: ", players);
          navigate("/verdict");
        }
      }
    }, 2000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeButton]);

  useEffect(() => {
    if (roomId && playerId) {
      showJudgeSin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, playerId]);

  const showJudgeSin = async () => {
    console.log("Players EN PUNISHMENT:", players);

    const player = players.find((player) => player.id === playerId);
    console.log("Jugador actual:", player);

    if (player) {
      const judgePlayer = players.find((judge) => judge.id === player.judgeSin);
      console.log("Jugador que tengo que juzgar:", judgePlayer);

      if (judgePlayer) {
        setAssignSin(judgePlayer.sin);
        setJudgePlayerId(judgePlayer.id);
      }
    }
  };

  // Lo utilizamos para guardar el array de players randomizado en el useEffect justo antes de navegar a la pagina Verdict
  // Utility function to shuffle an array
  function shuffleArrayPlayers() {
    // Make a copy of the array to avoid mutating the original array
    let shuffledArray = players.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at indices i and j
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setPlayers(shuffledArray);
    return true;
  }

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleEditPunish = async () => {
    setChangeButton(false);
    await deletePunish(playerId);
  };

  const handleNext = async () => {
    showAlert("success", "El texto se ha enviado correctamente");
    if (text === "") {
      showAlert("alert", "Introduzca un texto");
      return;
    }
    // Nueva verificación de palabras prohibidas
    if (containsBannedWords(text)) {
      showAlert("error", "El pecado contiene palabras prohibidas.");
      return;
    }
    setChangeButton(true);
    try {
      await createPunish(judgePlayerId, { punish: text });
    } catch (error) {
      // Nuevo manejo de errores del backend
      if (error.response && error.response.status === 400) {
        alert(error.response.data); // Mostrar mensaje de error del backend
      } else {
        alert(
          "Ocurrió un error al enviar el castigo. Por favor, intente nuevamente."
        );
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setContentToShow("sin");
      setTimeout(() => setShowContent(true), 300); // Mostrar contenido después de 300ms
    }, 1000); // Delay for 1 second
    return () => clearTimeout(timer);
  }, []);

  const toggleScroll = (content) => {
    if (isOpen) {
      setIsOpen(false);
      setShowContent(false); // Ocultar contenido al cerrar el scroll
      setTimeout(() => {
        setContentToShow(content);
        setIsOpen(true);
        setTimeout(() => setShowContent(true), 300); // Mostrar contenido después de 300ms
      }, 500); // Delay para permitir que el scroll se cierre antes de cambiar el contenido
    } else {
      setContentToShow(content);
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 300); // Mostrar contenido después de 300ms
    }
  };

  return (
    <Theme>
      <Container>
        <ScrollContainer>
          <Scroll isOpen={isOpen}>
            <ScrollText className={showContent ? "fade-in" : ""}>
              {isOpen && contentToShow === "sin" && showContent && (
                <>
                  <SubTitle>¡Juzga este Pecado!</SubTitle>
                  <Sin>{assignSin}</Sin>
                </>
              )}
              {isOpen && contentToShow === "punish" && showContent && (
                <>
                  <SubTitle>¡Castiga el Pecado!</SubTitle>
                  <Textarea
                    placeholder="Da rienda suelta a tu creatividad, dictamina tu sentencia al pecado anterior."
                    value={text}
                    onChange={handleInputChange}
                  />
                  <ButtonContainer>
                    {changeButton && (
                      <Button onClick={handleEditPunish}>Editar</Button>
                    )}
                    {!changeButton && (
                      <Button onClick={handleNext}>Enviar</Button>
                    )}
                  </ButtonContainer>
                </>
              )}
            </ScrollText>
          </Scroll>
        </ScrollContainer>
        <ButtonContainer>
          {contentToShow === "sin" ? (
            <ToggleButton onClick={() => toggleScroll("punish")}>
              Juzgar Pecado
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => toggleScroll("sin")}>
              Ver Pecado
            </ToggleButton>
          )}
        </ButtonContainer>
      </Container>
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          id={alert.id}
          type={alert.type}
          message={alert.message}
          onClose={removeAlert}
        />
      ))}

    </Theme>
  );
};

export default Punishments;
