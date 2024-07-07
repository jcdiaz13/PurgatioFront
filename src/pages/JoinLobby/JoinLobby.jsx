/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import { createPlayer } from "../../app/services/player";
import { getPlayersByRoomId } from "../../app/services/player";
import dwarf from "../../app/gifs/Dwarf.gif";
import undead from "../../app/gifs/undead.gif";
import wizard from "../../app/gifs/Wizard.gif";
import fairy from "../../app/gifs/fairy.gif";
import elf from "../../app/gifs/elf.gif";
import executione2 from "../../app/gifs/Executioner.gif";
import witch from "../../app/gifs/witch.gif";
import minotaur from "../../app/gifs/Minotaur.gif";
import interrogante from "../../app/gifs/gnome.gif";

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
  <img src={dwarf} />,
  <img src={undead} />,
  <img src={wizard} />,
  <img src={fairy} />,
  <img src={elf} />,
  <img src={executione2} />,
  <img src={witch} />,
  <img src={minotaur} />,
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
          placeholder="Ingresa tu nombre"
        />
        <Input
          type="text"
          value={roomId}
          onChange={handleRoomIdChange}
          placeholder="Introduce el número de sala"
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
