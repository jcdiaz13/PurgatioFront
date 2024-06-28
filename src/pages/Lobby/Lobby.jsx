import { Link } from 'react-router-dom';
import { Box, Container, Player, PlayerContainer } from './Lobby.styles'
import Theme from "../../components/Theme";
// import verdugo from "../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg";
// import mago from "../../app/img/rendering-wizard-controlling-magic.jpg";
// import hada from "../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg";

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
  return (
    <Theme>
      <Container>

        <Box></Box>
        <Link to="/sins">
          <button>START</button>
        </Link>
        <PlayerContainer>
          {players.map((player, index) => (
            <Player key={index}>
              <p>{player.name + " / " + player.image}</p>
            </Player>
          ))}
        </PlayerContainer>
      </Container>
    </Theme >

  )
}

export default Lobby

