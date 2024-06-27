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
} from "./CreateLobby.styles";
import { createRoom } from '../../app/services/room';
import { createPlayer } from '../../app/services/player';


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
  const { playerName, setPlayerName, setRoomId } = useContext(PlayerContext);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();

  const handleCreateLobby = async () => {
    const trimmedName = playerName.trim();
    if (trimmedName) {
      setPlayerName(trimmedName);
      console.log(playerName);

      const room = await createRoom({});
      setRoomId(room.data.id);

      const player = await createPlayer({
        playerName,
        roomId: room.data.id
      });
      console.log(room.data)
      navigate("/difficulty");
    } else {
      alert("Por favor ingrese un nombre antes de continuar.");
    }
  };

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

      {/* Contenedor del formulario */}
      <FormContainer isPopupOpen={isAvatarPopupOpen}>
        <Title>Crear nueva sala</Title>
        <h2>Selecciona un avatar</h2>

        {/* Contenedor de avatar que muestra el avatar seleccionado */}
        <AvatarContainer onClick={handleAvatarClick}>
          {selectedAvatar ? selectedAvatar : "Avatar"}
        </AvatarContainer>

        {/* Campo de entrada controlado para el nombre del jugador */}
        <input
          type="text"
          value={playerName}
          onChange={handleInputChange}
          placeholder="Ingresa tu nombre"
        />
        <ButtonContainer>
          <StyledLink to="/">
            <Button>Volver</Button>
          </StyledLink>
          <Button onClick={handleCreateLobby}>Crear sala</Button>
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
