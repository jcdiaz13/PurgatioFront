import { useContext, useEffect, useRef } from "react";
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
import { getPlayersByRoomId, deletePlayer, getPlayerIsActive } from "../../app/services/player";
import avatarImages from "../../app/utils/avatarImages";

const { Meta } = Card;

const Lobby = () => {
  const { roomId, players, setPlayers, roomOwner, playerId } =
    useContext(PlayerContext);
  const playerIdRef = useRef(playerId);
  // console.log("tttttttttt", playerId);
  const navigate = useNavigate();

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
        // console.log("bbbbbbbbbbbbbbbb", playerId, playerExists);
        navigate("/");
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
      setPlayers(response.data);
      console.log("Jugadores activos:", response.data);
    } catch (error) {
      console.error("Error eliminando al jugador:", error);
    }
  };

const handleStartGame = async () => {
    try {
        // Obtener la lista actualizada de jugadores
        const response = await getPlayersByRoomId(roomId);
        const allPlayers = response.data;
        console.log("Jugadores obtenidos:", allPlayers);

        // Crear una promesa para verificar si los jugadores están activos
        console.log("Creando promesas para verificar si los jugadores están activos");
        const playerPromises = allPlayers.map(async (player) => {
            const isActive = await getPlayerIsActive(player.id);
            console.log(`isActive para jugador ${player.id}:`, isActive);
            return isActive ? player : null;
        });

        // Esperar a que todas las promesas se resuelvan
        console.log("Esperando a que se resuelvan todas las promesas");
        const activePlayers = (await Promise.all(playerPromises)).filter(player => player !== null);
        console.log("Jugadores activos:", activePlayers);

        // Verificar si hay jugadores activos para navegar
        if (activePlayers.length > 0) {
            console.log("Navegando a /sins con los jugadores activos");
            navigate("/sins", { state: { players: activePlayers } });
        } else {
            console.log("No hay jugadores activos para iniciar el juego");
            // Aquí podrías mostrar un mensaje al usuario indicando que no hay suficientes jugadores activos
        }
    } catch (error) {
        console.error("Error starting game:", error);
    }
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
