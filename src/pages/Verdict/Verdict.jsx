import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  getPlayersByRoomId,
  updateVotesById,
  getPlayersWithoutVoting,
  updateIVoted,
} from "../../app/services/player";
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
  const [votesMap, setVotesMap] = useState(new Map());
  const [sendActive, setSendActive] = useState();

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

  const checkPlayersWithoutVoting = async () => {
    const response = await getPlayersWithoutVoting(roomId);
    const playersWithoutVoting = response.data;
    return playersWithoutVoting.length === 0;
  };

  useEffect(() => {
    const intervalWaitingPlayers = setInterval(async () => {
      const allPlayersDone = await checkPlayersWithoutVoting();

      if (allPlayersDone) {
        console.log("Estas en useEffect");
        navigate("/gameover");
      }
    }, 2000);
    return () => clearInterval(intervalWaitingPlayers);
  }, [sendActive]);

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

  const addItemToVotesMap = (victim) => {
    setVotesMap((prevMap) => {
      // Create a new map based on the previous state
      const newVotesMap = new Map(prevMap);
      // Set the new item
      newVotesMap.set(selectedPlayer.id, victim.id);
      // Return the new map
      return newVotesMap;
    });
  };
  //Cuando clicas el avatar que crees que es la victima, al momento handleVictimSelect guardas en un array/map/loquesea el valor de victim.id->
  // selectedPlayer.id : victim.id,
  // selectedPlayer.id : victim.id
  const handleVictimSelect = (victim) => {
    if (!selectedPlayer) return;

    addItemToVotesMap(victim);
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

  // Función para recorrer el map de votesMap y enviar a la BD los ID de los jugadores acertados
  const iterateVotesMap = () => {
    const entries = Array.from(votesMap.entries());
    entries.forEach(async ([keySelectedPlayerId, valueVictimId]) => {
      if (keySelectedPlayerId === valueVictimId) {
        await updateVotesById(valueVictimId);
      }
    });
  };
  // Creo que es una función mejor que la de iterateVotesMap porque es más optima, falta Comprovar si se puede sustituir y Optimizar
  const goThroughVotesMap = (id) => {
    console.log("Entro a recorrer");
    for (let value of votesMap.values()) {
      if (value === id) {
        console.log("Yason iguales");
        return true;
      }
    }
    return false;
  };

  const handleVotaciones = async () => {
    if (players.length - 1 === Object.values(victimAvatars).length) {
      iterateVotesMap();
      await updateIVoted(playerId);
      goThroughVotesMap();
      setSendActive(true);
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
                <p>Click me!</p>//<p>{player.sin}</p>
              )}
            </Cover>
          </Book>
        );
      }
    });

  return (
    <Container>
      {renderPlayers()}
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
                const alreadyClicked = goThroughVotesMap(victim.id);
                return (
                  <AvatarOption
                    key={victim.id}
                    onClick={() => handleVictimSelect(victim)}
                  >
                    {/* Optimizar esto, no puede ser que tenga que duplicarlo y no hacer un condicional ternario en la propiedad style */}
                    {!alreadyClicked && (
                      <img
                        src={imgObj ? imgObj.img : "default_image_path.png"}
                        alt={victim.playerName}
                      />
                    )}
                    {alreadyClicked && (
                      <img
                        src={imgObj ? imgObj.img : "default_image_path.png"}
                        alt={victim.playerName}
                        style={{ filter: `grayscale(100%)` }}
                      />
                    )}
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
