import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getPlayersByRoomId } from "../../app/services/player";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import {
  Book,
  Cover,
  Container,
  ModalWrapper,
  ModalContent,
  CloseButton,
  OptionButton,
  OptionContainer,
} from "./Verdict.styles";
import avatarImages from "../../app/utils/avatarImages";

const Verdict = () => {
  const navigate = useNavigate();
  const { roomId, players, setPlayers } = useContext(PlayerContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [victimModalOpen, setVictimModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedVictim, setSelectedVictim] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await getPlayersByRoomId(roomId);
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, [roomId, setPlayers]);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVictimModalOpen(false);
    setSelectedVictim(null);
  };

  const openVictimSelection = () => {
    setVictimModalOpen(true);
  };

  const handleVictimSelect = (victim) => {
    setSelectedVictim(victim);
  };

  const confirmVictimSelection = () => {
    if (!selectedPlayer || !selectedVictim) return;

    console.log(
      `${selectedPlayer.playerName} ha seleccionado a ${selectedVictim.playerName} como víctima.`
    );
    closeModal();
  };

  const renderPlayers = () =>
    players.map((player) => {
      return (
        <Book key={player.id} onClick={() => handlePlayerClick(player)}>
          <Cover>
            <img
              src={player.avatarImage || "default_image_path.png"}
              alt={player.playerName}
            />{" "}
            {/* Imagen por defecto si no hay */}
            <p>{player.playerName}</p>
            <p>{player.sin}</p> {/* Mostrar el pecado del jugador */}
          </Cover>
        </Book>
      );
    });

  return (
    <Container>
      {renderPlayers()}
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>{selectedPlayer ? selectedPlayer.playerName : ""}</h2>
            <p>{selectedPlayer ? selectedPlayer.sin : ""}</p>{" "}
            {/* Mostrar el pecado del jugador */}
            <h3>Seleccionar Víctima</h3>
            <OptionButton onClick={openVictimSelection}>
              Elegir Víctima
            </OptionButton>
          </ModalContent>
        </ModalWrapper>
      )}
      {victimModalOpen && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h3>Selecciona una víctima</h3>
            <div>
              {players.map((victim) => {
                const avatarId = victim.avatarId;
                const imgObj = avatarImages.find(
                  (avatarImage) => avatarImage.id === avatarId
                );
                return (
                  <OptionContainer
                    key={victim.id}
                    onClick={() => handleVictimSelect(victim)}
                  >
                    <img
                      src={imgObj.img || "default_image_path.png"}
                      alt={victim.playerName}
                    />
                    {/* Imagen por defecto si no hay */}
                    <p>{victim.playerName}</p>
                  </OptionContainer>
                );
              })}
            </div>
            <OptionButton onClick={confirmVictimSelection}>
              Confirmar Selección
            </OptionButton>
          </ModalContent>
        </ModalWrapper>
      )}
      <OptionButton onClick={() => navigate("/")}>
        Ir a la Siguiente Página
      </OptionButton>
    </Container>
  );
};

export default Verdict;
