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
import { getPlayersByRoomId, deletePlayer, getPlayerIsActive } from "../../app/services/player";
import avatarImages from "../../app/utils/avatarImages";

const { Meta } = Card;

const Lobby = () => {
  const { roomId, players, setPlayers, roomOwner, playerId } =
    useContext(PlayerContext);
  const playerIdRef = useRef(playerId);
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false); // Estado para indicar si el juego ha comenzado

  useEffect(() => {
    if (roomId) {
      const intervalId = setInterval(() => {
        showPlayers();
      }, 2000);

      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  useEffect(() => {
    playerIdRef.current = playerId; // Almacenamos playerId en una referencia para que sea posible acceder a ella dentro de la función showPlayers que llamamos en un setInterval.
  }, [playerId]);

  useEffect(() => {
    if (gameStarted) {
      navigate("/sins", { state: { players: players.filter((player) => player.isActive) } });
    }
  }, [gameStarted, players, navigate]);

  const showPlayers = async () => {
    try {
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);

      // Comprobamos si alguna id de los usuarios de la room coincide con la id del usuario logueado
      const playerIsPlaying = response.data.find((player) => {
        return player.id === playerIdRef.current;
      });
      //Si un jugador no existe lo redireccionamos a home
      if (!playerIsPlaying) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error mostrando los jugadores:", error);
    }
  };

  const handleRemovePlayer = async (id) => {
    try {
      // Verificamos si el jugador que se intenta eliminar es el roomOwner
      if (id === playerId) {
        alert("No puedes eliminar al propietario de la sala.");
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

  const getActivePlayers = async () => {
    const response = await getPlayersByRoomId(roomId);
    const activePlayers = [];

    for (const player of response.data) {
      const isActive = await getPlayerIsActive(player.id);
      if (isActive) {
        activePlayers.push(player);
      }
    }

    return activePlayers;
  };

  const handleStartGame = async () => {
    try {
      const activePlayers = await getActivePlayers();
      if (activePlayers.length === players.length) {
        setGameStarted(true); // Indicar que el juego ha comenzado
      } else {
        alert("No todos los jugadores están activos. Espera a que todos los jugadores estén activos antes de iniciar el juego.");
      }
    } catch (error) {
      console.error("Error al iniciar el juego:", error);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };

  return (
    <Theme>
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
