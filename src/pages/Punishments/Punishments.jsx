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
  }, [roomId]);

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
    setChangeButton(true);
    if (text === "") {
      alert("Introduzca un texto!!");
      return;
    }
    await createPunish(judgePlayerId, { punish: text });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setContentToShow("sin");
    }, 1000); // Delay for 1 second

    return () => clearTimeout(timer);
  }, []);

  const toggleScroll = (content) => {
    setContentToShow(content);
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Theme>
      <Container>
        <ScrollContainer>
          <Scroll isOpen={isOpen}>
            <ScrollText>
              {isOpen && contentToShow === "sin" && <p>{assignSin}</p>}
              {isOpen && contentToShow === "punish" && (
                <>
                  <SubTitle>Juzga el Pecado</SubTitle>
                  <Textarea value={text} onChange={handleInputChange} />
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
          <ToggleButton onClick={() => toggleScroll("sin")}>
            {isOpen ? "Cerrar Pecado" : "Ver Pecado"}
          </ToggleButton>
          {!isOpen && (
            <ToggleButton onClick={() => toggleScroll("punish")}>
              Juzgar Pecado
            </ToggleButton>
          )}
        </ButtonContainer>
      </Container>
    </Theme>
  );
};

export default Punishments;
