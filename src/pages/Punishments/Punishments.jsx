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

  const checkPlayersWithoutPunish = async () => {
    const response = await getPlayersWithoutPunish(roomId);
    const playersWithoutPunish = response.data;
    return playersWithoutPunish.length === 0;
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const allPlayersDone = await checkPlayersWithoutPunish();
      // if (allPlayersDone) {
      //   if (roomOwner) {
      //     console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
      //   }
      // }
      // TODO

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

      if (judgePlayer) setAssignSin(judgePlayer.sin);
      setJudgePlayerId(judgePlayer.id);
    }
  };

  const handleInputChange = (e) => {
    // setRandomSin(e.target.value);
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

  return (
    <Theme>
      <Container>
        <FormContainer>
          <Title>Castigo</Title>
          {/* ESTADO QUE CONTIENE EL PECADO DEL DESTINATARIO */}
          <SubTitle>Juzga este pecado:</SubTitle>
          {assignSin}
          {/* <p>{randomSin}</p> */}
          <Textarea value={text} onChange={handleInputChange} />
          {/* onChange={handlePunishmentChange} placeholder={suggest} en text area */}
          <ButtonContainer>
            {changeButton && <Button onClick={handleEditPunish}>Editar</Button>}
            {!changeButton && <Button onClick={handleNext}>Enviar</Button>}
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
};

export default Punishments;
