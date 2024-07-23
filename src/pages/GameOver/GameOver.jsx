import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, PlayerCard, PlayerName, Message, MatchList, MatchItem, Title } from './GameOver.styles';
import { getVotedPlayers } from "../../app/services/player";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import avatarImages from "../../app/utils/avatarImages";

const GameOver = () => {
  const navigate = useNavigate();
  const { roomId } = useContext(PlayerContext);

  const [losers, setLosers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [showGameOverText, setShowGameOverText] = useState(false);

  useEffect(() => {
    const fetchVotedPlayers = async () => {
      try {
        const response = await getVotedPlayers(roomId);
        const players = response.data;

        const filteredLosers = players.filter(player => player.voted > 0);
        filteredLosers.sort((a, b) => b.voted - a.voted);

        setLosers(filteredLosers);

        const matchedPlayers = players.filter(player => player.votes > 0 && player.votes === player.id);
        setMatches(matchedPlayers);

        if (filteredLosers.length > 0) {
          setShowGameOverText(true);
        }
      } catch (error) {
        console.error("Error fetching voted players:", error);
      }
    };

    fetchVotedPlayers();
  }, [roomId]);

  const goToNextPage = () => {
    navigate("/");
  };

  const getAvatarImg = (avatarId) => {
    const avatar = avatarImages.find((img) => img.id === avatarId);
    return avatar ? avatar.img : "default_avatar_path.png";
  };

  return (
    <Container>
      <Title>Lista de Jugadores Castigados</Title>
      {showGameOverText && <Message>Perdedores:</Message>}
      {losers.length > 0 ? (
        losers.map((player) => (
          <PlayerCard key={player.id}>
            <img src={getAvatarImg(player.avatar_id)} alt={player.player_name} />
            <PlayerName>{player.player_name}</PlayerName>
          </PlayerCard>
        ))
      ) : (
        <Message>No players have lost the game.</Message>
      )}
      <Button onClick={goToNextPage}>Volver</Button>
      {matches.length > 0 && (
        <MatchList>
          <h2>Matches:</h2>
          {matches.map((match) => (
            <MatchItem key={match.id}>
              <img src={getAvatarImg(match.avatar_id)} alt={match.player_name} />
              <p>{match.player_name}</p>
            </MatchItem>
          ))}
        </MatchList>
      )}
    </Container>
  );
};

export default GameOver;
