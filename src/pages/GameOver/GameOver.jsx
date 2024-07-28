import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  PlayerCard,
  PlayerName,
  Message,
  PlayerContainer,
  SubContainer,
  AvatarPopup,
  Overlay,
  Info,
  MiniInfo,
  ButtonInfo,
  MiniInfo2,
} from "./GameOver.styles";
import { getVotedPlayers } from "../../app/services/player";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import avatarImages from "../../app/utils/avatarImages";
import Theme from "../../components/Theme";

const GameOver = () => {
  const navigate = useNavigate();
  const { roomId, setBlockButtons } = useContext(PlayerContext);
  const [losers, setLosers] = useState([]);
  const [openInfo, setOpenInfo] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const fetchVotedPlayers = async () => {
      try {
        const response = await getVotedPlayers(roomId);
        if (response.data.length > 0) {
          const sortedLosers = response.data.sort((a, b) => b.voted - a.voted);
          setLosers(sortedLosers);
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

  const closeInfo = () => {
    setOpenInfo(false);
    console.log(selectedPlayer)
    setSelectedPlayer(null);
  }

  return (
    <Theme>
      <Container>
        <SubContainer>
          {losers.length > 0 ? (
            <>
              <Message>
                ¡Aquí están los jugadores los cuales habéis adivinado su pecado,
                es hora de que cumplan su castigo!
              </Message>
              <PlayerContainer>
                {losers.map((player) => {
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
                })}
              </PlayerContainer>
              {openInfo && selectedPlayer && (
                <Overlay onClick={closeInfo}>
                  <AvatarPopup>
                    <MiniInfo>Este es el pecado que cometió <span>{selectedPlayer.playerName}</span> :</MiniInfo>
                    <Info>
                      {selectedPlayer.sin}</Info>
                    <MiniInfo2>Deberá realizar este castigo para expiar sus pecados:</MiniInfo2>
                    <Info>{selectedPlayer.punish}</Info>

                  </AvatarPopup>
                  <ButtonInfo onClick={closeInfo}>Volver</ButtonInfo>
                </Overlay>
              )}
              <Button onClick={goToNextPage}>HOME</Button>
            </>
          ) : (
            <p>No players have been voted out.</p>
          )}
        </SubContainer>
      </Container>
    </Theme>
  );
};

export default GameOver;
