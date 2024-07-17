import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "antd";
import {
  Box,
  Container,
  PlayerContainer,
  Id,
  Button,
  DeletePlayerButton,
  Copy,
} from "./Lobby.styles";
import Theme from "../../components/Theme";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { getPlayersByRoomId, deletePlayer } from "../../app/services/player";
import avatarImages from "../../app/utils/avatarImages";

const { Meta } = Card;

const Lobby = () => {
  const { roomId, players, setPlayers, roomOwner, playerId } =
    useContext(PlayerContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (roomId) {
      const timeoutId = setInterval(() => {
        ShowPlayers();
      }, 2000);

      return () => clearInterval(timeoutId);
    }
  }, [roomId]);

  const ShowPlayers = async () => {
    try {
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);
      setLoading(false); // Set loading to false after players are fetched

      // Check if the current player exists in the updated list of players
      const playerExists = response.data.find(
        (player) => player.id === playerId
      );

      // If player does not exist and loading is false, navigate to "/"
      if (!playerExists && !loading) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error showing players:", error);
    }
  };

  const handleRemovePlayer = async (id) => {
    try {
      await deletePlayer(id);
      const response = await getPlayersByRoomId(roomId);
      setPlayers(response.data);
      console.log("Players after removal:", response.data);

      // Check if the removed player is the current user
      const removedPlayer = response.data.find((player) => player.id === id);
      console.log("lo envia?", removedPlayer);
      if (removedPlayer === playerId) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error removing player:", error);
    }
  };

  //setInterval(ShowPlayers, 3000)
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Theme>
      <Container>
        <Box />
        <Id>
          Room ID: <Copy onClick={() => copyToClipboard(roomId)}>{roomId}</Copy>
        </Id>
        <Link to={"/sins"}>
          <Button>Start</Button>
        </Link>
        <PlayerContainer>
          {players?.map((player, index) => {
            const avatarId = player.avatarId;
            const imgObj = avatarImages.find(
              (avatarImage) => avatarImage.id == avatarId
            );

            return (
              <Card
                key={index}
                hoverable={false}
                style={{
                  background: "transparent",
                  cursor: "auto",
                  maxWidth: 80,
                  maxHeight: 80,
                  marginTop: 30,
                  marginBottom: 25,
                  padding: 0,
                  border: "none",
                  position: "relative",
                }}
                styles={{ body: { padding: "0px" } }}
                cover={
                  <img
                    alt="avatar"
                    src={imgObj.img}
                    style={{ width: "100%", height: "auto", border: "none" }}
                  />
                }
              >
                {roomOwner && (
                  <DeletePlayerButton
                    onClick={() => handleRemovePlayer(player.id)}
                  >
                    X
                  </DeletePlayerButton>
                )}
                <Meta
                  title={
                    <span
                      style={{
                        alignItems: "center",
                        fontSize: 12,
                        borderRadius: 5,
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
                  style={{ padding: 0, height: "2", lineHeight: "unset" }}
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
