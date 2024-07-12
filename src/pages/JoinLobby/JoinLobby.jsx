/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import { createPlayer } from "../../app/services/player";
import { getPlayersByRoomId } from "../../app/services/player";
import turtle from "../../app/assets/gifs/tortuga.gif";
import pinkguy from "../../app/assets/gifs/pinkfinn.gif";
import tronco from "../../app/assets/gifs/tronco.gif";
import camaleon from "../../app/assets/gifs/camaleon.gif";
import glassguy from "../../app/assets/gifs/glassguy.gif";
import bunny from "../../app/assets/gifs/bunny.gif"
import pig from "../../app/assets/gifs/pig.gif";
import maskguy from "../../app/assets/gifs/maskguy.gif";
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
} from "./JoinLobby.styles";

// Lista de avatares disponibles
const avatars = [
  <img src={turtle} />,
  <img src={pig} />,
  <img src={pinkguy} />,
  <img src={bunny} />,
  <img src={glassguy} />,
  <img src={camaleon} />,
  <img src={maskguy} />,
  <img src={tronco} />
];

function JoinLobby() {
  const { playerName, setPlayerName, roomId, setRoomId, setPlayerId } =
    useContext(PlayerContext);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();

  const closePopup = () => {
    setIsAvatarPopupOpen(null);
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

  const handleJoinLobby = async () => {
    const trimmedName = playerName.trim();
    const players = await getPlayersByRoomId(roomId);
    if (players.data.length < 6) {
      if (trimmedName && roomId) {
        try {
          const player = await createPlayer({
            playerName: trimmedName,
            room: { id: roomId },
          });
          setPlayerId(player.data.id);
          setRoomId(roomId);
          navigate("/lobby");
        } catch (error) {
          alert("Error al crear el jugador. Por favor, inténtelo de nuevo.");
        }
      } else {
        alert(
          "Por favor ingrese un nombre y un ID de sala antes de continuar."
        );
      }
    } else {
      alert("Limit exceeded. Max 6 players");
    }
  };

  return (
    <Container>
      {isAvatarPopupOpen && <Overlay onClick={closePopup} />}
      <FormContainer $isPopupOpen={isAvatarPopupOpen}>
        <Title>Unirse a una sala</Title>
        <h2>Selecciona un avatar</h2>
        <AvatarContainer onClick={handleAvatarClick}>
          {selectedAvatar ? selectedAvatar : <img src={interrogante} />}
        </AvatarContainer>
        <Input
          type="text"
          value={playerName}
          onChange={handleNameChange}
          placeholder="Nombre"
        />
        <Input
          type="text"
          value={roomId}
          onChange={handleRoomIdChange}
          placeholder="Número de sala"
        />
        <ButtonContainer>
          <StyledLink to="/">
            <Button>Volver</Button>
          </StyledLink>
          <Button onClick={handleJoinLobby}>Unirse</Button>
        </ButtonContainer>
      </FormContainer>
      {isAvatarPopupOpen && (
        <AvatarPopup>
          {avatars.map((avatar) => (
            <AvatarOption
              key={avatar}
              onClick={() => handleAvatarSelect(avatar)}
            >
              {avatar}
            </AvatarOption>
          ))}
        </AvatarPopup>
      )}
    </Container>
  );
}

export default JoinLobby;
