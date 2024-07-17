import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const { Meta } = Card;

const Lobby = () => {
  const { roomId, players, setPlayers, roomOwner, playerId } =
    useContext(PlayerContext);
  const playerIdRef = useRef(playerId);
  const navigate = useNavigate();
  const [startEnabled, setStartEnabled] = useState(false); // Estado para controlar si se puede habilitar el botón Start

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
    // Verificamos si el jugador actual es el roomOwner para habilitar el botón Start
    if (roomOwner && roomOwner.id === playerId) {
      setStartEnabled(true);
    } else {
      setStartEnabled(false);
    }
  }, [roomOwner, playerId]);

  const showPlayers = async () => {
    try {
      const response = await getPlayersByRoomId(roomId);
      const activePlayers = response.data.filter((player) => player.isActive);
      setPlayers(activePlayers);

      // Actualizamos el estado de startEnabled basado en si el jugador actual es el roomOwner y al menos un jugador está activo
      if (roomOwner && roomOwner.id === playerId && activePlayers.length > 0) {
        setStartEnabled(true);
      } else {
        setStartEnabled(false);
      }
    } catch (error) {
      console.error("Error showing players:", error);
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
      const activePlayers = response.data.filter((player) => player.isActive);
      setPlayers(activePlayers);
      console.log("Jugadores activos:", activePlayers);
    } catch (error) {
      console.error("Error eliminando al jugador:", error);
    }
  };

  const handleStartGame = () => {
    // Filtramos solo los jugadores activos para pasar a la siguiente página
    const activePlayers = players.filter((player) => player.isActive);
    navigate("/sins", { state: { players: activePlayers } });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Theme>
      <Container>
        <Box />
        <Id>
          Room ID: <Copy onClick={() => copyToClipboard(roomId)}>{roomId}</Copy>
        </Id>
        {startEnabled && (
          <Button onClick={handleStartGame}>Start</Button>
        )}
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
