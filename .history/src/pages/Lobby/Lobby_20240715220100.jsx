import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Box, Container, PlayerContainer, Id, Button, DeletePlayerButton } from "./Lobby.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getPlayersByRoomId } from "../../app/services/player";
import avatarImages from "../../app/utils/avatarImages";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Lobby = () => {
  const { roomId, players, setPlayers, playerId, gameStarted, setGameStarted } = useContext(PlayerContext);
  const navigate = useNavigate();

  useEffect(() => {                                 //Muestra los jugadores con ShowPlayers y va renderizando la página por intervalos de 2s
    if (roomId) {
      const timeoutId = setInterval(() => {
        ShowPlayers();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  const ShowPlayers = async () => {                     //Muestra los jugadores
    try {
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error showing players:", error);
    }
  };


  const handleRemovePlayer = async (playerId) => {      //Expulsa al jugador de la sala, lo redirige al home y vuelve a renderizar la página llamando a getPlayersByRoomId
    try {
      await deletePlayer(playerId);
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);
      console.log("Player removed:", response.data);
      navigate("/"); 
    } catch (error) {
      console.error("Error removing player:", error);
    }
  };
  return (
    <Theme>
      <Container>
        <Box />
        <Id>Room ID: {roomId}</Id>
        <Link to={"/sins"}><Button>Start</Button></Link>
        <PlayerContainer>
          {players?.map((player, index) => {
            const avatarId = player.avatarId;
            const imgObj = avatarImages.find(
              (avatarImage) => avatarImage.id == avatarId
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
                  position: "relative", // Asegúrate de que la tarjeta sea relativa para el posicionamiento absoluto del botón
                }}
                styles={{ body: { padding: "0px" } }} // Ajusta el padding del cuerpo de la tarjeta para reducir el espacio de la descripción
                cover={
                  <img
                    alt="avatar"
                    src={imgObj.img}
                    style={{ width: "100%", height: "auto", border: "none" }}
                  />
                }
              >
                <DeletePlayerButton onClick={() => handleRemovePlayer(player.id)}>X</DeletePlayerButton>
                <Meta
                  title={
                    <span
                      style={{
                        alignItems: "center",
                        fontSize: 12,
                        borderRadius: 5,
                        color: "white",
                        backgroundColor: "black",  //Aquí estaría bien poner background de bloques de ladrillo, para que parezca que están sobre una plataforma
                        padding: "4px",
                        display: "block",
                        textAlign: "center",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {player.playerName}
                    </span>
                  }
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
