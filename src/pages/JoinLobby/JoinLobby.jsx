/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import { createPlayer, getPlayersByRoomId } from "../../app/services/player";
import { getGameStatus } from "../../app/services/room";
import avatarImages from "../../app/utils/avatarImages";
import interrogante from "../../app/assets/gifs/question.gif";
import Alert from "../../components/Alert"

import {
  Container,
  Title,
  FormContainer,
  Input,
  ButtonContainer,
  StyledLink,
  Button,
  AvatarContainer,
  AvatarPopup,
  AvatarOption,
  Overlay,
  Pergamino,
} from "./JoinLobby.styles";

function JoinLobby() {
  const {
    playerName,
    setPlayerName,
    roomId,
    setRoomId,
    setPlayerId,
    setRoomOwner,
    blockButtons,
    setBlockButtons,
  } = useContext(PlayerContext);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);

  const closePopup = () => {
    setIsAvatarPopupOpen(false);
  };

  useEffect(() => {
    setPlayerName("");
    setRoomId("");
  }, [setPlayerName, setRoomId]);

  const handleAvatarClick = () => {
    setIsAvatarPopupOpen(true);
  };
  const showAlert = (type, message) => {
    const id = new Date().getTime();
    setAlerts([...alerts, { id, type, message }]);
    setTimeout(() => removeAlert(id), 3000); // Remover alerta después de 3 segundos
  };

  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };


  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setIsAvatarPopupOpen(false);
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  const checkGameStatus = async () => {
    const status = await getGameStatus(roomId);
    return status;
  };

  const handleJoinLobby = async () => {
    const trimmedName = playerName.trim();
    if (!selectedAvatar) {
      showAlert("error", "Por favor seleccione un avatar antes de continuar.");
      return;
    }
    if (!trimmedName || !roomId) {
      showAlert("alert", "Por favor ingrese un nombre y un ID de sala antes de continuar.");
      return;
    }

    setBlockButtons(true);
    console.log(blockButtons);

    try {
      const players = await getPlayersByRoomId(roomId);
      if (players.data.length >= 6) {
        showAlert("alert", "Límite excedido. Máximo 6 jugadores.");
        setBlockButtons(false);
        return;
      }

      const gameStatus = await checkGameStatus();
      if (gameStatus === true) {
        showAlert("alert", "La sala no está accesible porque el juego ya ha comenzado.");
        setBlockButtons(false);
        return;
      }

      const player = await createPlayer({
        playerName: trimmedName,
        avatarId: selectedAvatar.id,
        room: { id: roomId },
      });

      setPlayerId(player.data.id);
      setRoomId(roomId);
      setRoomOwner(false);
      navigate("/lobby");
    } catch (error) {
      console.error("Error joining lobby:", error);
      setBlockButtons(false); // Re-enable the button in case of error
    }
  };

  return (
    <Container>
      {isAvatarPopupOpen && <Overlay onClick={closePopup} />}
      <FormContainer $isPopupOpen={isAvatarPopupOpen}>
        <Title>Unirse a una sala</Title>
        <h2>Selecciona un avatar</h2>
        <AvatarContainer onClick={handleAvatarClick}>
          {selectedAvatar ? (
            <img src={selectedAvatar.img} alt="Selected Avatar" />
          ) : (
            <img src={interrogante} alt="Interrogante Avatar" />
          )}
        </AvatarContainer>
        <Pergamino>
          <Input
            type="text"
            value={playerName}
            onChange={handleNameChange}
            placeholder="Nombre"
          />
        </Pergamino>
        <Pergamino>
          <Input
            type="number"
            value={roomId}
            onChange={handleRoomIdChange}
            placeholder="Número de sala"
          />
        </Pergamino>
        <ButtonContainer>
          <StyledLink to="/">
            <Button>Volver</Button>
          </StyledLink>
          <Button onClick={handleJoinLobby} disabled={blockButtons}>
            Unirse
          </Button>
        </ButtonContainer>
      </FormContainer>
      {isAvatarPopupOpen && (
        <AvatarPopup>
          {avatarImages.map((avatar, i) => {
            const isSelected =
              selectedAvatar && selectedAvatar.id === avatar.id;
            return (
              <AvatarOption
                key={i}
                onClick={() => handleAvatarSelect(avatar)}
                style={{ filter: isSelected ? "grayscale(100%)" : "none" }}
              >
                <img src={avatar.img} alt={`Avatar ${i}`} />
              </AvatarOption>
            );
          })}
        </AvatarPopup>
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

    </Container>
  );
}

export default JoinLobby;
