import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Box, Container, PlayerContainer, Id, Button } from "./Lobby.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getPlayersByRoomId } from "../../app/services/player";

const { Meta } = Card;

const Lobby = () => {
  const { roomId, selectedAvatar, players, setPlayers } =
    useContext(PlayerContext);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await getPlayersByRoomId(roomId);
        setPlayers(response.data);
        console.log("Fetched players:", response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    if (roomId) {
      const intervalId = setInterval(() => {
        fetchPlayers();
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [roomId, setPlayers]);

  return (
    <Theme>
      <Container>
        <Box />
        <Id>Room ID: {roomId}</Id>
        <Link to="/sins">
          <Button>START</Button>
        </Link>
        <PlayerContainer>
          {players?.map((player, index) => (
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
                selectedAvatar ? (
                  <img
                    alt="avatar"
                    src={selectedAvatar.props.src}
                    style={{ width: "100%", height: "auto" }}
                  />
                ) : (
                  <div>No Avatar</div>
                )
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
          ))}
        </PlayerContainer>
      </Container>
    </Theme>
  );
};

export default Lobby;
