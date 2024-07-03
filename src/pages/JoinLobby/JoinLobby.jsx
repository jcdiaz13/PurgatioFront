import { useContext, useState } from "react";
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
import { createPlayer } from '../../app/services/player';
import { useNavigate } from 'react-router-dom';

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
  const { playerName, setPlayerName } = useContext(PlayerContext);
  const [roomId, setRoomId] = useState('');
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setIsAvatarPopupOpen(true);
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setIsAvatarPopupOpen(false);
  };

  const handleInputChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  const handleJoinLobby = async () => {
    const trimmedName = playerName.trim();
    if (trimmedName && roomId) {
      try {
        await createPlayer({
          playerName: trimmedName,
          room: { id: roomId }
        });
        navigate("/lobby");
      } catch (error) {
        alert("Error al crear el jugador. Por favor, inténtelo de nuevo.");
      }
    } else {
      alert("Por favor ingrese un nombre y un ID de sala antes de continuar.");
    }
  };

  return (
    <Container>
      {isAvatarPopupOpen && <Overlay />}
      <FormContainer isPopupOpen={isAvatarPopupOpen}>
        <Title>Unirse a una sala</Title>
        <h2>Selecciona un avatar</h2>
        <AvatarContainer onClick={handleAvatarClick}>
          {selectedAvatar ? selectedAvatar : "Avatar"}
        </AvatarContainer>
        <Input
          type="text"
          value={playerName}
          onChange={handleInputChange}
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
