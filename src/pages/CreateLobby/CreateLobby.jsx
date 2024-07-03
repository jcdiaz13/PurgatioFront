import { useContext, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  FormContainer,
  ButtonContainer,
  StyledLink,
  Button,
  AvatarContainer,
  AvatarPopup,
  AvatarOption,
  Overlay,
  Input,
} from "./CreateLobby.styles";

// Lista de avatares disponibles
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

function CreateLobby() {
  const { playerName, setPlayerName } = useContext(PlayerContext);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();

  const handlePlayerNameAndAvatar = () => {
    const trimmedName = playerName.trim();
    if (trimmedName && selectedAvatar !== null) {
      setPlayerName(trimmedName);
      navigate("/difficulty");
      console.log(trimmedName);
    } else {
      if (!trimmedName) {
        alert("Por favor ingrese un nombre antes de continuar.");
      }
      if (selectedAvatar === null) {
        alert("Por favor selecciona un avatar antes de continuar.");
      }
    }
  };

  const closePopup = () => {
    setIsAvatarPopupOpen(false); // Corregido para usar false
  };

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

  return (
    <Container>
      {isAvatarPopupOpen && <Overlay onClick={closePopup} />}
      <FormContainer $ispopupopen={isAvatarPopupOpen}>
        <Title>Crear nueva sala</Title>
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
        <ButtonContainer>
          <StyledLink to="/">
            <Button>Volver</Button>
          </StyledLink>
          <Button onClick={handlePlayerNameAndAvatar}>Crear sala</Button>
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

export default CreateLobby;
