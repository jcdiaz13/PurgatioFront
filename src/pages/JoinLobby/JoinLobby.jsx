import { useContext, useEffect, useState } from "react";
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
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { createPlayer } from "../../app/services/player";
import { useNavigate } from "react-router-dom";
import { getPlayersByRoomId } from "../../app/services/player";

const avatars = [
  "Avatar 1",
  "Avatar 2",
  "Avatar 3",
  "Avatar 4",
  "Avatar 5",
  "Avatar 6",
  "Avatar 7",
  "Avatar 8",
];

function JoinLobby() {
  const { playerName, setPlayerName, roomId, setRoomId } =
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
    if (players.data.length < 2) {
      if (trimmedName && roomId) {
        try {
          await createPlayer({
            playerName: trimmedName,
            room: { id: roomId },
          });
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
      alert("Limit exceeded. Max 2 players");
    }
  };

  return (
    <Container>
      {isAvatarPopupOpen && <Overlay onClick={closePopup} />}
      <FormContainer $isPopupOpen={isAvatarPopupOpen}>
        <Title>Unirse a una sala</Title>
        <h2>Selecciona un avatar</h2>
        <AvatarContainer onClick={handleAvatarClick}>
          {selectedAvatar ? selectedAvatar : "Avatar"}
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
