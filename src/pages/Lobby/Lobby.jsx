import { useContext, useEffect, useState } from 'react';
import { Gif, Box, Container, CirclesContainer, Player, PlayerContainer, Id } from './Lobby.styles';
import Theme from "../../components/Theme";
import verdugo from '../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg';
import mago from '../../app/img/rendering-wizard-controlling-magic.jpg';
import hada from '../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg';
import { getPlayersByRoomId } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext';

const Lobby = () => {

  const { roomId } = useContext(PlayerContext);
  const [p, setP] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await getPlayersByRoomId(roomId);
        setP(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    if (roomId) {
      fetchPlayers();
    }
  }, [roomId]);

  return (
    <Theme>
      <Container>
        <Box></Box>
        <Id>Id de la sala :{roomId}</Id>
        <PlayerContainer>
          {p.map((player, index) => (
            <Player key={index}>
              <p>{player.playerName}</p>
            </Player>
          ))}
        </PlayerContainer>
      </Container>
    </Theme>
  );
};

export default Lobby;

