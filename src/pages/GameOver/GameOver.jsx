import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  PlayerCard,
  PlayerName,
  Message,
  Title,
  PlayerContainer,
  SubContainer,
  AvatarPopup,
} from "./GameOver.styles";
import { getVotedPlayers } from "../../app/services/player";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import avatarImages from "../../app/utils/avatarImages";
import Theme from "../../components/Theme";

const GameOver = () => {
  const navigate = useNavigate();
  const { roomId, setBlockButtons } = useContext(PlayerContext);
  const [losers, setLosers] = useState([]);
  const [showGameOverText, setShowGameOverText] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const fetchVotedPlayers = async () => {
      try {
        const response = await getVotedPlayers(roomId);
        if (response.data.length > 0) {
          const sortedLosers = response.data.sort((a, b) => b.voted - a.voted);

          setLosers(sortedLosers);

          setShowGameOverText(true);
        }
      } catch (error) {
        console.error("Error fetching voted players:", error);
      }
    };

    fetchVotedPlayers();
  }, [roomId]);

  const goToNextPage = () => {
    setBlockButtons(false);
    navigate("/");
  };

  const handlePlayerCard = (player) => {
    setSelectedPlayer(player);
    setOpenInfo(true);
  };

  return (
    <Theme>
      <Container>
        <SubContainer>
          <Message>
            ¡Aquí están los jugadores los cuales habéis adivinado su pecado, es
            hora de que cumplan su castigo!
          </Message>
          <PlayerContainer>
            {/* {showGameOverText && <></>} */}
            {losers.length > 0 ? (
              losers.map((player) => {
                const avatarId = player.avatarId;
                const imgObj = avatarImages.find(
                  (avatarImage) => avatarImage.id === avatarId
                );
                return (
                  <PlayerCard
                    key={player.id}
                    onClick={() => handlePlayerCard(player)}
                  >
                    <img src={imgObj.img} alt="avatar" />
                    <PlayerName>{player.playerName}</PlayerName>
                  </PlayerCard>
                );
              })
            ) : (
              <p>No players have been voted out.</p>
            )}
          </PlayerContainer>
          {openInfo && selectedPlayer && (
            <AvatarPopup>
              <div>
                <p>{selectedPlayer.sin}</p>
                <br />
                <p>{selectedPlayer.punish}</p>
              </div>
            </AvatarPopup>
          )}
          <Button onClick={goToNextPage}>Volver</Button>
        </SubContainer>
      </Container>
    </Theme>
  );
};

export default GameOver;
