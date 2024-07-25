import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  PlayerCard,
  PlayerName,
  Message,
  MatchList,
  MatchItem,
  Title,
} from "./GameOver.styles";
import { getVotedPlayers } from "../../app/services/player";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import avatarImages from "../../app/utils/avatarImages";

const GameOver = () => {
  const navigate = useNavigate();
  const { roomId } = useContext(PlayerContext);
  const [losers, setLosers] = useState([]);
  const [showGameOverText, setShowGameOverText] = useState(false);

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
        losers.map((player) => {
          // const imgObj = getAvatarImg(player.avatarId);
          const avatarId = player.avatarId;
          const imgObj = avatarImages.find(
            (avatarImage) => avatarImage.id === avatarId
          );
          return (
            <PlayerCard key={player.id}>
              <img src={imgObj.img} alt="avatar" />
              <PlayerName>{player.playerName}</PlayerName>
            </PlayerCard>
          );
        })
      ) : (
        // <Message>No players have lost the game.</Message>
        <div>
          {/* AQUI PONER UNA INTERFAZ QUE INDIQUE QUE NO HAY GENTE QUE CUMPLA LAS CONDICIONES PARA SER CASTIGADA*/}
        </div>
      )}
      <Button onClick={goToNextPage}>Volver</Button>
      {/* ESTE CODIGO ACTUALMENTE NO TIENE SENTIDO PORQUE VOTES NO DEVUELVE QUIEN TE HA VOTADO */}
      {/* {matches.length > 0 && (
        <MatchList>
          <h2>Matches:</h2>
          {matches.map((match) => (
            <MatchItem key={match.id}>
              <img
                src={getAvatarImg(match.avatar_id)}
                alt={match.player_name}
              />
              <p>{match.player_name}</p>
            </MatchItem>
          ))}
        </MatchList>
      )} */}
    </Container>
  );
};

export default GameOver;
