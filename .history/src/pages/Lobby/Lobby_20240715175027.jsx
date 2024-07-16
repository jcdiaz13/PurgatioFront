import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Box, Container, PlayerContainer, Id, Button } from "./Lobby.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getPlayersByRoomId } from "../../app/services/player";
import avatarImages from "../../app/utils/avatarImages";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Lobby = () => {
  const { roomId, players, setPlayers, playerId, gameStarted, setGameStarted } = useContext(PlayerContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (roomId) {
      const timeoutId = setInterval(() => {
        ShowPlayers();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  const ShowPlayers = async () => {
    try {
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error showing players:", error);
    }
  };


  //DE MOMENTO NO ES FUNCIONAL, YA QUE FALTA HACER UN USEFFECT. TAL COMO ESTA AHORA SOLO EL ADMIN PUEDE JUGAR.
  // const handleStartGame = () => {
  //   // OBTENER EL ID DEL JUGADOR ACTUAL DESDE EL PLAYER CONTEXT.
  //   const currentPlayerId = playerId;
  //   // OBTENER EL ID DEL ADMIN EN LA LISTA DE JUGADORES
  //   const admin = players.length > 0 ? players[0].id : null;
  //   // VERIFICA SI EL JUGADOR ACTUAL ES EL ADMIN
  //   if (currentPlayerId === admin) {
  //     setGameStarted(true);
  //     navigate("/sins");
  //   }
  // }
  return (
    <Theme>
      <Container>
        <Box />
        <Id>Room ID: {roomId}</Id>
        {/* LOGICA PARA QUE SOLO EL ADMIN PUEDA VER EL BOTON DE START GAME */}
        {/* {players.length > 0 && players[0].id === playerId && (
          <Button onClick={handleStartGame}>START</Button>
        )} */}
        <Link to={"/sins"}><Button>Start</Button></Link>
        <PlayerContainer>
          {players?.map((player, index) => {
            const avatarId = player.avatarId; //Esta es la ID del avatar asignada en la base de datos
            const imgObj = avatarImages.find(
              //Almacenamos el objeto, cuya ID del array coincide con la ID de la base de datos(Para así luego acceder a la imagen de este objeto)
              (avatarImage) => avatarImage.id == avatarId
            );
            console.log("11111111111111111", imgObj);
            return (
              <Card
                key={index}
                hoverable
                style={{
                  background: "transparent",
                  cursor: "auto",
                  maxWidth: 80,
                  maxHeight: 80,
                  marginTop: 30,
                  marginBottom: 25,
                  padding: 0,
                  border: "none",
                }}
                cover={
                  <img
                    alt="avatar"
                    src={imgObj.img}
                    style={{ width: "100%", height: "auto", border: "none" }}
                  />
                }
                styles={{ body: { padding: "0px" } }} // Ajusta el padding del cuerpo de la tarjeta para reducir el espacio de la descripción
              <button></button>
              >
                <Meta
                  title={
                    <span
                      style={{
                        alignItems: "center",
                        fontSize: 12,
                        borderRadius: 5,
                        color: "white",
                        backgroundColor: "black",
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
