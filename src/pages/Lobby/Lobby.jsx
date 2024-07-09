import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Box, Container, PlayerContainer, Id, Button } from "./Lobby.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getPlayersByRoomId } from "../../app/services/player";

const { Meta } = Card;

const Lobby = () => {
  const { roomId, playerName, selectedAvatar, players, setPlayers } =
    useContext(PlayerContext);

  useEffect(() => {
    if (roomId) {
      const intervalId = setInterval(() => {
        fetchPlayers();
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [roomId]);

  const fetchPlayers = async () => {
    try {
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);
      console.log("Fetched players:", response.data); // Verifica que la respuesta contenga los datos correctos
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  return (
    <Theme>
      <Container>
        <Box />
        <Id>Room ID: {roomId}</Id>
        <div>
          <Id>{playerName}</Id>
        </div>
        <Link to="/sins">
          <Button>START</Button>
        </Link>
        <PlayerContainer>
          {players.map((player, index) => (
            <Card
              key={index}
              hoverable
              style={{ maxWidth: 150, maxHeight: 400 }}
              cover={<img alt="example" src={selectedAvatar.props.src} />}
            >
              <Meta title={player.playerName} />
            </Card>
          ))}
        </PlayerContainer>
      </Container>
    </Theme>
  );
};

export default Lobby;
