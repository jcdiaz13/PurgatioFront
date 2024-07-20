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
  AvatarPopup,
  AvatarOption,
  MiniTitle
} from "./Verdict.styles";
import avatarImages from "../../app/utils/avatarImages";

const Verdict = () => {
  const navigate = useNavigate();
  const { roomId, players, setPlayers, playerId } = useContext(PlayerContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [victimModalOpen, setVictimModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
<<<<<<< HEAD
  const [victimAvatars, setVictimAvatars] = useState({}); // Estado para almacenar avatares seleccionados
=======
  const [selectedVictim, setSelectedVictim] = useState(null);
  const [playerSins, setPlayerSins] = useState({});
>>>>>>> 68b344859b910e7f7169e2ed4ad765493c2df2b3

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
    setVictimModalOpen(false);
  };

  const openVictimSelection = () => {
    setVictimModalOpen(true);
  };

  const handleVictimSelect = (victim) => {
    if (!selectedPlayer) return;

    const victimAvatar = avatarImages.find((img) => img.id === victim.avatarId);

    setVictimAvatars((prev) => ({
      ...prev,
      [selectedPlayer.id]: {
        img: victimAvatar ? victimAvatar.img : null,
        name: victim.playerName
      },
    }));

    setVictimModalOpen(false);
    setModalOpen(false); // Cerrar también el modal principal
    console.log(
      `${selectedPlayer.playerName} ha seleccionado a ${victim.playerName} como víctima.`
    );
  };

  const renderPlayers = () =>
    players.map((player) => {
      if (player.id != playerId) {
        const victimAvatar = victimAvatars[player.id];

<<<<<<< HEAD
        return (
          <Book key={player.id} onClick={() => handlePlayerClick(player)}>
            <Cover>
              {victimAvatar ? (
                <>
                  <img src={victimAvatar.img} alt={player.playerName} />
                  <p>{victimAvatar.name}</p>
                </>
              ) : (
                <p>{player.sin}</p> // Mostrar el pecado del jugador si no hay avatar seleccionado
              )}
            </Cover>
          </Book>
        );
      }
    });
=======
    console.log(`${selectedPlayer.playerName} ha seleccionado a ${selectedVictim.playerName} como víctima.`);
    closeModal();
  };

  const renderPlayers = () => (
    players.map((player) => (
      <Book key={player.id} onClick={() => handlePlayerClick(player)}>
        <Cover>
          <img src={player.avatarImage || 'default_image_path.png'} alt={player.playerName} /> {/* Imagen por defecto si no hay */}
          <p>{player.playerName}</p>
          <p>{playerSins[player.id] || ''}</p> {/* Mostrar el pecado del jugador */}
        </Cover>
      </Book>
    ))
  );
>>>>>>> 68b344859b910e7f7169e2ed4ad765493c2df2b3

  return (
    <Container>
      {renderPlayers()}
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
<<<<<<< HEAD
  <p>{selectedPlayer ? selectedPlayer.sin : ""}</p> {/* Mostrar el pecado del jugador */ }
            <h3>Selecciona quien crees que cometió este acto!</h3>
            <OptionButton onClick={openVictimSelection}>
              Elegir Jugador
            </OptionButton>
=======
            <h2>{selectedPlayer ? selectedPlayer.playerName : ''}</h2>
            <p>{selectedPlayer ? playerSins[selectedPlayer.id] : ''}</p> {/* Mostrar el pecado del jugador */}
            <h3>Seleccionar Víctima</h3>
            <OptionButton onClick={openVictimSelection}>Elegir Víctima</OptionButton>
>>>>>>> 68b344859b910e7f7169e2ed4ad765493c2df2b3
          </ModalContent >
        </ModalWrapper >
      )}
{
  victimModalOpen && (
    <>
      <MiniTitle>Selecciona una víctima</MiniTitle>
      <AvatarPopup>
        {players.map((victim) => {
          if (victim.id != playerId) {
            const avatarId = victim.avatarId;
            const imgObj = avatarImages.find(
              (avatarImage) => avatarImage.id === avatarId
            );
            return (
              <AvatarOption
                key={victim.id}
                onClick={() => handleVictimSelect(victim)}
              >
                <img
                  src={imgObj ? imgObj.img : "default_image_path.png"}
                  alt={victim.playerName}
                />
                <p>{victim.playerName}</p>
              </AvatarOption>
            );
          }
        })}

      </AvatarPopup>
    </>
  )
}
    </Container >
  );
};

export default Verdict;

