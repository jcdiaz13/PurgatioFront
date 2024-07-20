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
  OptionButton,
  AvatarPopup,
  AvatarOption,
  MiniTitle,
} from "./Verdict.styles";
import avatarImages from "../../app/utils/avatarImages";
import { Button } from "./Verdict.styles";

const Verdict = () => {
  const navigate = useNavigate();
  const { roomId, players, setPlayers, playerId } = useContext(PlayerContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [victimModalOpen, setVictimModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [victimAvatars, setVictimAvatars] = useState({}); // Estado para almacenar avatares seleccionados

  // selectedPlayer.id : victim.id,
  // selectedPlayer.id : victim.id
  function(victim){
if(map.get(select)){
  map.delete(selectedPlayer)
}
    setmap
  }

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
  };

  const openVictimSelection = () => {
    setVictimModalOpen(true);
  };

  //Cuando clicas el avatar que crees que es la victima, al momento handleVictimSelect guardas en un array/map/loquesea el valor de victim.id->
  // selectedPlayer.id : victim.id,
  // selectedPlayer.id : victim.id
  const handleVictimSelect = (victim) => {
    console.log(victim);
    if (!selectedPlayer) return;

    const victimAvatar = avatarImages.find((img) => img.id === victim.avatarId);

    setVictimAvatars((prev) => ({
      ...prev,
      [selectedPlayer.id]: {
        img: victimAvatar ? victimAvatar.img : null,
        name: victim.playerName,
      },
    }));

    setVictimModalOpen(false);
    setModalOpen(false); // Cerrar también el modal principal
    // console.log(
    //   `${selectedPlayer.playerName} ha seleccionado a ${victim.playerName} como víctima.`
    // );
  };

  const handleVotaciones = () => {
    if (players.length - 1 === Object.values(victimAvatars).length) {
      console.log("Hola");
    }
  };

  const renderPlayers = () =>
    players.map((player) => {
      if (player.id != playerId) {
        const victimAvatar = victimAvatars[player.id];

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

  return (
    <Container>
      {renderPlayers()}
      {console.log(selectedPlayer)}
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <p>{selectedPlayer ? selectedPlayer.sin : ""}</p>{" "}
            {/* Mostrar el pecado del jugador */}
            <h3>Selecciona quien crees que cometió este acto!</h3>
            <OptionButton onClick={closeModal}>Close</OptionButton>
            <OptionButton onClick={openVictimSelection}>
              Elegir Jugador
            </OptionButton>
          </ModalContent>
        </ModalWrapper>
      )}
      {victimModalOpen && (
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
      )}
      <Button onClick={handleVotaciones}>Enviar</Button>
    </Container>
  );
};

export default Verdict;
