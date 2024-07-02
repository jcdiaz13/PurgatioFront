import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Player,
  PlayerContainer,
  RoomId,
} from "./Lobby.styles";
import Theme from "../../components/Theme";
import { getRoomId } from "../../app/services/room";
<<<<<<< HEAD
import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
// import verdugo from "../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg";
// import mago from "../../app/img/rendering-wizard-controlling-magic.jpg";
// import hada from "../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg";
=======
import { getPlayersByRoomId } from "../../app/services/player";
import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
>>>>>>> 01c8e1750f787a47af31ea4a19f2a69c0b765787

const Lobby = () => {
  const { playerName, setPlayerName, roomId, setRoomId } =
    useContext(PlayerContext);
<<<<<<< HEAD
  // const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleGetRoomId = async () => {
    try {
      const response = await getRoomId({});
      console.log(response);
      setRoomId(response.data.id);
    } catch (error) {
      console.error("Error getting room ID:", error);
=======
  const [players, setPlayers] = useState([]);

  const handleGetRoomId = async () => {
    try {
      const response = await getRoomId();
      setRoomId(response.data.id);
    } catch (error) {
      console.error("Error getting room ID:", error);
    }
  };

  const fetchPlayers = async (roomId) => {
    try {
      const fetchedPlayers = await getPlayersByRoomId(roomId);
      setPlayers(fetchedPlayers);
    } catch (error) {
      console.error("Error fetching players:", error);
>>>>>>> 01c8e1750f787a47af31ea4a19f2a69c0b765787
    }
  };

  useEffect(() => {
    handleGetRoomId();
    console.log(handleGetRoomId);
  }, []);
<<<<<<< HEAD
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
=======

  useEffect(() => {
    if (roomId) {
      fetchPlayers(roomId);
      console.log(fetchPlayers);
    }
  }, [roomId]);
>>>>>>> 01c8e1750f787a47af31ea4a19f2a69c0b765787

  return (
    <Theme>
      <Container>
        <Box></Box>
<<<<<<< HEAD
        <p>Room ID: {roomId}</p>
=======
        <RoomId>{`Sala ${roomId}`}</RoomId>
>>>>>>> 01c8e1750f787a47af31ea4a19f2a69c0b765787
        <Link to="/sins">
          <button>START</button>
        </Link>
        <PlayerContainer>
          {players?.map((player, i) => (
            <Player key={i}>
              <p>{player.playerName}</p>
            </Player>
          ))}
        </PlayerContainer>
      </Container>
    </Theme>
  );
};

export default Lobby;
