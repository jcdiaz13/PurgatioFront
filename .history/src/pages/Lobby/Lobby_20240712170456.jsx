import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Box, Container, PlayerContainer, Id, Button } from "./Lobby.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getPlayersByRoomId } from "../../app/services/player";
import avatarImages from "../../app/utils/avatarImages";

const { Meta } = Card;

const Lobby = () => {
  const { roomId, players, setPlayers } = useContext(PlayerContext);

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

  return (
    <Theme>
      <Container>
        <Box />
        <Id>Room ID: {roomId}</Id>
        <Link to="/sins">
          <Button>START</Button>
        </Link>
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
                  maxWidth: 50,
                  maxHeight: 50,
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
              >
                <Meta
                  title={
                    <span
                      style={{
                        alignItems: "center",
                        fontSize: 12,
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
                  style={{ padding: 0, height: "auto", lineHeight: "unset" }}
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
