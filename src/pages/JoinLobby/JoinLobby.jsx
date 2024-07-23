/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import { createPlayer, getPlayersByRoomId } from "../../app/services/player";
import { getGameStatus } from "../../app/services/room";
import avatarImages from "../../app/utils/avatarImages";
import interrogante from "../../app/assets/gifs/question.gif";

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

    if (!trimmedName || !roomId) {
      alert("Por favor ingrese un nombre y un ID de sala antes de continuar.");
      return;
    }

    setBlockButtons(true);
    console.log(blockButtons);

    try {
      const players = await getPlayersByRoomId(roomId);
      if (players.data.length >= 8) {
        alert("Límite excedido. Máximo 8 jugadores.");
        setBlockButtons(false);
        return;
      }

      const gameStatus = await checkGameStatus();
      if (gameStatus === true) {
        alert("La sala no está accesible porque el juego ya ha comenzado.");
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
            type="text"
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
          {avatarImages.map((avatar, i) => (
            <AvatarOption key={i} onClick={() => handleAvatarSelect(avatar)}>
              <img src={avatar.img} alt={`Avatar ${i}`} />
            </AvatarOption>
          ))}
        </AvatarPopup>
      )}
    </Container>
  );
}

export default JoinLobby;
