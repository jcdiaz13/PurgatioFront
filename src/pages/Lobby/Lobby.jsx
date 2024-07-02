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
import { getPlayersByRoomId } from "../../app/services/player";
import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";

const Lobby = () => {
  const { playerName, setPlayerName, roomId, setRoomId } =
    useContext(PlayerContext);
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
    }
  };

  useEffect(() => {
    handleGetRoomId();
    console.log(handleGetRoomId);
  }, []);

  useEffect(() => {
    if (roomId) {
      fetchPlayers(roomId);
      console.log(fetchPlayers);
    }
  }, [roomId]);

  return (
    <Theme>
      <Container>
        <Box></Box>
        <RoomId>{`Sala ${roomId}`}</RoomId>
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
