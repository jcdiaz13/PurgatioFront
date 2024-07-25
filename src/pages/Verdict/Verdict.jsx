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
  ButtonContainer,
  PlayerContainer,
  Overlay,
} from "./Verdict.styles";
import avatarImages from "../../app/utils/avatarImages";
import { Button } from "./Verdict.styles";

//Alert
import Alert from "../../components/Alert"

const Verdict = () => {
  const navigate = useNavigate();
  const { roomId, players, setPlayers, playerId } = useContext(PlayerContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [victimModalOpen, setVictimModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [victimAvatars, setVictimAvatars] = useState({}); // Estado para almacenar avatares seleccionados
  const [votesMap, setVotesMap] = useState(new Map());
  const [sendActive, setSendActive] = useState();
  const [alerts, setAlerts] = useState([]);

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

  const showAlert = (type, message) => {
    const id = new Date().getTime();
    setAlerts([...alerts, { id, type, message }]);
    setTimeout(() => removeAlert(id), 3000); // Remover alerta después de 3 segundos
  };

  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
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

  const handleVictimSelect = (victim) => {
    if (!selectedPlayer) return;

    addItemToVotesMap(victim);
    const victimAvatar = avatarImages.find((img) => img.id === victim.avatarId);

    setVictimAvatars((prev) => {
      // Filter out any existing victim with the same idVictim
      const filteredAvatars = Object.fromEntries(
        Object.entries(prev).filter(
          ([value]) => value.idVictim !== victim.id
        )
      );

      // Add the new victim
      return {
        ...filteredAvatars,
        [selectedPlayer.id]: {
          img: victimAvatar ? victimAvatar.img : null,
          name: victim.playerName,
          idVictim: victim.id,
        },
      };
    });

    setVictimModalOpen(false);
    setModalOpen(false); // Cerrar también el modal principal
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
    const isComplete = players.length - 1 === Object.values(victimAvatars).length;

    if (!isComplete) {
      showAlert("error", "Hay campos incompletos. Por favor, completa toda la información.");
      return;
    }
    showAlert("success", "Se ha enviado correctamente.");

    try {
      iterateVotesMap();
      await updateIVoted(playerId);
      goThroughVotesMap();
      setSendActive(true);
    } catch (error) {
      showAlert("error", "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.");
      console.error("Error en handleVotaciones:", error);
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
                <p>Quién es quién?</p>
              )}
            </Cover>
          </Book>
        );
      }
    });

  return (
    <Container>
      <PlayerContainer>{renderPlayers()}</PlayerContainer>
      {modalOpen && (
        <ModalWrapper>
          <ModalContent>
            <h3>Vota quién crees que cometió este pecado:</h3>
            <p>{selectedPlayer ? selectedPlayer.sin : ""}</p>{" "}
            {/* Mostrar el pecado del jugador */}

            <ButtonContainer>
              <OptionButton onClick={closeModal}>Close</OptionButton>
              <OptionButton onClick={openVictimSelection}>
                Elegir Jugador
              </OptionButton>
            </ButtonContainer>
          </ModalContent>
        </ModalWrapper>
      )}
      {victimModalOpen && (
        <Overlay>
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
                    {/* Optimizar esto, no puede ser que tenga que duplicarlo y no hacer un condicional ternario en la propiedad style, solucionar con styled components si no */}
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
        </Overlay>
      )}
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          id={alert.id}
          type={alert.type}
          message={alert.message}
          onClose={removeAlert}
        />
      ))}
      <Button onClick={handleVotaciones}>Enviar</Button>
    </Container>
  );
};

export default Verdict;
