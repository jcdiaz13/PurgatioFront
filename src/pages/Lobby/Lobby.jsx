import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Player,
  PlayerContainer,
  Id,
  Button,
} from "./Lobby.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getPlayersByRoomId } from "../../app/services/player";
// import verdugo from "../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg";
// import mago from "../../app/img/rendering-wizard-controlling-magic.jpg";
// import hada from "../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg";

const Lobby = () => {
  const { roomId } = useContext(PlayerContext);
  const [players, setPlayers] = useState([]);
  // const [selectedAvatar, setSelectedAvatar] = useState(null);

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
      console.error('Error showing players:', error);

    }

  };

  return (
    <Theme>
      <Container>
        <Box></Box>
        <Id>Room ID: {roomId}</Id>
        <Link to="/sins">
          <Button>START</Button>
        </Link>
        <PlayerContainer>
          {players.map((player, index) => (
            <Player key={index}>
              <p>{player.playerName + " / " + player.image}</p>
            </Player>
          ))}
        </PlayerContainer>
      </Container>
    </Theme>
  );
};

export default Lobby;
