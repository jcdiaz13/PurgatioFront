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
} from "./Punishments.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import {
  createPunish,
  getPlayersWithoutPunish,
  deletePunish,
} from "../../app/services/player";

const Punishments = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { roomId, playerId, players } = useContext(PlayerContext);
  const [assignSin, setAssignSin] = useState("");
  const [changeButton, setChangeButton] = useState(false);
  const [judgePlayerId, setJudgePlayerId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [contentToShow, setContentToShow] = useState(null);
  const [showContent, setShowContent] = useState(false); // Estado para controlar la visibilidad del contenido

  const checkPlayersWithoutPunish = async () => {
    const response = await getPlayersWithoutPunish(roomId);
    const playersWithoutPunish = response.data;
    return playersWithoutPunish.length === 0;
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const allPlayersDone = await checkPlayersWithoutPunish();
      if (allPlayersDone) {
        navigate("/verdict");
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

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleEditPunish = async () => {
    setChangeButton(false);
    await deletePunish(playerId);
  };

  const handleNext = async () => {
    if (text === "") {
      alert("Introduzca un texto!!");
      return;
    }
    setChangeButton(true);
    await createPunish(judgePlayerId, { punish: text });
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
                  <p>{assignSin}</p>
                </>
              )}
              {isOpen && contentToShow === "punish" && showContent && (
                <>
                  <SubTitle>Juzga el Pecado</SubTitle>
                  <Textarea placeholder="Escribe aquí el castigo que debería realizar" value={text} onChange={handleInputChange} />
                  
                    {changeButton && (
                      <Button onClick={handleEditPunish}>Editar</Button>
                    )}
                    {!changeButton && (
                      <Button onClick={handleNext}>Enviar</Button>
                    )}
                  
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
    </Theme>
  );
};

export default Punishments;
