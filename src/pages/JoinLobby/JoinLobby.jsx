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
} from "./JoinLobby.styles";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import {
  AvatarPopup,
  AvatarOption,
  Overlay,
} from "../CreateLobby/CreateLobby.styles";

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

function JoinLobby() {
  const { playerName, setPlayerName } = useContext(PlayerContext);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // Función para manejar el clic en el contenedor de avatar
  const handleAvatarClick = () => {
    setIsAvatarPopupOpen(true);
  };

  // Función para manejar la selección de un avatar
  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setIsAvatarPopupOpen(false);
  };

  const handleInputChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <Container>
      {/* Muestra el overlay si el pop-up está abierto */}
      {isAvatarPopupOpen && <Overlay />}
      <FormContainer isPopupOpen={isAvatarPopupOpen}>
        <Title>Unirse a una sala</Title>
        <h2>Selecciona un avatar</h2>

        {/* Contenedor de avatar que muestra el avatar seleccionado*/}
        <AvatarContainer onClick={handleAvatarClick}>
          {selectedAvatar ? selectedAvatar : "Avatar"}
        </AvatarContainer>

        {/* Campo de entrada controlado para el nombre del jugador */}
        <Input
          type="text"
          value={playerName}
          onChange={handleInputChange}
          placeholder="Introduce tu nombre"
        />
        <Input type="text" placeholder="Introduce el número de sala" />

        <ButtonContainer>
          <StyledLink to="/">
            <Button>Volver</Button>
          </StyledLink>
          <StyledLink to="/lobby">
            <Button>Unirse</Button>
          </StyledLink>
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
