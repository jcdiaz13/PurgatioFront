import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import interrogante from "../../app/assets/gifs/question.gif";
import avatarImages from "../../app/utils/avatarImages";
import Alert from "../../components/Alert"; // Importa el componente Alert
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
  Pergamino,
} from "./CreateLobby.styles";

function CreateLobby() {
  const { playerName, setPlayerName, selectedAvatar, setSelectedAvatar } =
    useContext(PlayerContext);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [alerts, setAlerts] = useState([]); // Estado para las alertas
  const navigate = useNavigate();

  const handlePlayerNameAndAvatar = () => {
    const trimmedName = playerName.trim();
    if (trimmedName && selectedAvatar !== null) {
      setPlayerName(trimmedName);
      navigate("/difficulty");
    } else {
      if (!trimmedName) {
        showAlert("error", "Por favor ingrese un nombre antes de continuar.");
      }
      if (selectedAvatar === null) {
        showAlert(
          "alert",
          "Por favor selecciona un avatar antes de continuar."
        );
      }
    }
  };

  useEffect(() => {
    setPlayerName("");
  }, [setPlayerName]);

  const showAlert = (type, message) => {
    const id = new Date().getTime();
    setAlerts([...alerts, { id, type, message }]);
    setTimeout(() => removeAlert(id), 3000); // Remover alerta después de 3 segundos
  };

  const removeAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  const closePopup = () => {
    setIsAvatarPopupOpen(false);
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
          {selectedAvatar ? (
            <img src={selectedAvatar.img} />
          ) : (
            <img src={interrogante} />
          )}
        </AvatarContainer>
        <Pergamino>
          <Input
            type="text"
            value={playerName}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
        </Pergamino>
        <ButtonContainer>
          <StyledLink to="/">
            <Button>Volver</Button>
          </StyledLink>
          <Button onClick={handlePlayerNameAndAvatar}>Crear</Button>
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
      <div>
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            id={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={removeAlert}
          />
        ))}
      </div>
    </Container>
  );
}

export default CreateLobby;
