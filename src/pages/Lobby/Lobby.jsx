import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Box, Container, PlayerContainer, Id, Button } from "./Lobby.styles";
import Theme from "../../components/Theme";

const { Meta } = Card;
import { PlayerContext } from '../../app/contexts/PlayerContext';
import { getPlayersByRoomId } from '../../app/services/player';

const Lobby = () => {
  const { roomId, playerName, selectedAvatar, players, setPlayers } =
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
        <div>
          <Id>{playerName}</Id>
        </div>
        <Link to="/sins">
          <Button>START</Button>
        </Link>
        <PlayerContainer>
          {players?.map((player, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 150, height: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
              cover={
                selectedAvatar ? (
                  <img alt="example" src={selectedAvatar.props.src} style={{ width: '100%', height: 'auto' }} />
                ) : (
                  <div>No Avatar</div>
                )
              }
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
