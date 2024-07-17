import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSins, getPlayersByRoomId } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext';
import { Book, Cover, Container, ModalWrapper, ModalContent, CloseButton, OptionButton } from './Verdict.styles.js';

const Verdict = () => {
  const navigate = useNavigate();
  const { roomId, players, setPlayers } = useContext(PlayerContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [playerSins, setPlayerSins] = useState({});

  useEffect(() => {
    const fetchPlayersAndSins = async () => {
      try {
        // Obtener los jugadores de la sala
        const playersResponse = await getPlayersByRoomId(roomId);
        setPlayers(playersResponse.data);

        // Obtener los pecados de los jugadores
        const sinsResponse = await getSins(roomId);
        const sinsByPlayerId = playersResponse.data.reduce((acc, player, index) => {
          acc[player.id] = sinsResponse[index];
          return acc;
        }, {});
        setPlayerSins(sinsByPlayerId);
      } catch (error) {
        console.error("Error al obtener jugadores y pecados:", error);
      }
    };

    fetchPlayersAndSins();
  }, [roomId, setPlayers]);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToNextPage = () => {
    navigate('/');
  };

  const renderPlayers = () => (
    players.map((player) => (
      <Book key={player.id} onClick={() => handlePlayerClick(player)}>
        <Cover>
          <p>{player.playerName}</p>
        </Cover>
      </Book>
    ))
  );

  return (
    <Container>
      {renderPlayers()}
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>{selectedPlayer ? selectedPlayer.playerName : ''}</h2>
            <p>{selectedPlayer ? playerSins[selectedPlayer.id] : ''}</p>
          </ModalContent>
        </ModalWrapper>
      )}
      <OptionButton onClick={goToNextPage}>Ir a la Siguiente Página</OptionButton>
    </Container>
  );
};

export default Verdict;
