import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import {
  Box,
  Container,
  PlayerContainer,
  Id,
  Button,
  DeletePlayerButton,
  Copy,
  Name,
} from "./Lobby.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getPlayersByRoomId, deletePlayer } from "../../app/services/player";
import avatarImages from "../../app/utils/avatarImages";
import { setGameStatus, getGameStatus } from "../../app/services/room";
import Alert from "../../components/Alert/Alert"; // Importar el componente Alert

const { Meta } = Card;

const Lobby = () => {
  const [alerts, setAlerts] = useState([]); // Añadir estado para las alertas

  const showAlert = (type, message) => {
    const id = new Date().getTime();
    setAlerts([...alerts, { id, type, message }]);
    setTimeout(() => removeAlert(id), 3000); // Remover alerta después de 3 segundos
  };

  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const {
    roomId,
    players,
    setPlayers,
    roomOwner,
    playerId,
    gameStarted,
    setGameStarted,
  } = useContext(PlayerContext);
  const playerIdRef = useRef(playerId);
  const navigate = useNavigate();

  useEffect(() => {
    if (roomId) {
      const intervalId = setInterval(async () => {
        if (await checkGameStatus()) {
          console.log(111, players, "GAME STATUS ", gameStarted);
          navigate("/sins");
        } else {
          console.log(222, players);
          showPlayers();
        }
      }, 2000);

      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  useEffect(() => {
    playerIdRef.current = playerId; // Almacenamos playerId en una referencia para que sea posible acceder a ella dentro de la función showPlayers que llamamos en un setInterval.
  }, [playerId]);

  const showPlayers = async () => {
    try {
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);

      // Comprobamos si alguna id de los usuarios de la room coincide con la id del usuario logueado
      const playerIsPlaying = response.data.find(
        (player) => player.id === playerIdRef.current
      );
      //Si un jugador no existe lo redireccionamos a home
      if (!playerIsPlaying) {
        console.log("bbbbbbbbbbbbbbbb", playerId, playerIsPlaying);
        navigate("/");
      }
    } catch (error) {
      console.error("Error mostrando jugadores:", error);
    }
  };

  const handleRemovePlayer = async (id) => {
    try {
      // Verificamos si el jugador que se intenta eliminar es el roomOwner
      if (id === playerId) {
        showAlert("error", "No puedes eliminar al propietario de la sala.");
        return;
      }

      await deletePlayer(id);
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);
      console.log("Jugadores activos:", response.data);
    } catch (error) {
      console.error("Error eliminando al jugador:", error);
    }
  };

  const handleStartGame = async () => {
    if (players.length < 0) { //Modificar la cantidad mínima de jugadores
      showAlert("alert", "Debe haber al menos 3 jugadores para comenzar el juego.");
      return;
    }
    await setGameStatus(roomId, true);
    setGameStarted(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showAlert("info", "El código ha sido copiado");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const checkGameStatus = async () => {
    const status = await getGameStatus(roomId);
    return status;
  };

  return (
    <Theme>
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          id={alert.id}
          type={alert.type}
          message={alert.message}
          onClose={removeAlert}
        />
      ))}
      <Container>
        <Box />
        <Id>
          Room ID: <Copy onClick={() => copyToClipboard(roomId)}>{roomId}</Copy>
        </Id>
        {roomOwner && <Button onClick={handleStartGame}>Start</Button>}
        <PlayerContainer>
          {players?.map((player, index) => {
            const avatarId = player.avatarId;
            const imgObj = avatarImages.find(
              (avatarImage) => avatarImage.id === avatarId
            );

            return (
              <Card
                key={index}
                hoverable={false}
                style={{
                  background: "transparent",
                  cursor: "auto",
                  maxWidth: 80,
                  maxHeight: 80,
                  marginTop: 30,
                  marginBottom: 25,
                  padding: 0,
                  border: "none",
                  position: "relative",
                }}
                styles={{ body: { padding: "0px" } }}
                cover={
                  <img
                    alt="avatar"
                    src={imgObj.img}
                    style={{ width: "100%", height: "auto", border: "none" }}
                  />
                }
              >
                {roomOwner && (
                  <DeletePlayerButton
                    onClick={() => handleRemovePlayer(player.id)}
                  >
                    <p>X</p>
                  </DeletePlayerButton>
                )}
                <Meta
                  title={<Name>{player.playerName}</Name>}
                  style={{ padding: 0, height: "2", lineHeight: "unset" }}
                />
              </Card>
            );
          })}
        </PlayerContainer>
      </Container>
    </Theme>
  );
};

export default Lobby;
