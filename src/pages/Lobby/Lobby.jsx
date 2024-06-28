import React from 'react'
import { Gif, Box, Container, CirclesContainer, Player, PlayerContainer } from './Lobby.styles'
import Theme from "../../components/Theme";
import verdugo from '../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg';
import mago from '../../app/img/rendering-wizard-controlling-magic.jpg';
import hada from '../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg';
import { getPlayersByRoomId } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext';

const Lobby = () => {
  const players = [
    {
      id: 1,
      name: "Player1",
      image: "Avatar",
    },
    {
      id: 2,
      name: "Player2",
      image: "Avatar",
    },
    {
      id: 3,
      name: "Player3",
      image: "Avatar",
    },
    {
      id: 4,
      name: "Player4",
      image: "Avatar",
    },
    {
      id: 5,
      name: "Player5",
      image: "Avatar",
    },
    {
      id: 6,
      name: "Player6",
      image: "Avatar",
    },
    {
      id: 7,
      name: "Player7",
      image: "Avatar",
    },
    {
      id: 8,
      name: "Player8",
      image: "Avatar",
    },
  ];

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
      <Theme>
        <Container>
          <Box></Box>
          <PlayerContainer>
            {players.map((player, index) => (
              <Player key={index}>
                <p>{player.name + " / " + player.image}</p>
              </Player>
            ))}
          </PlayerContainer>
        </Container>
      </Theme >

      export default Lobby;

