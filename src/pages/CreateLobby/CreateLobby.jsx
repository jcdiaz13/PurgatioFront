/* eslint-disable react/jsx-key */
import { useContext, useState, useEffect } from 'react';
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import interrogante from "../../app/assets/gifs/question.gif";
import avatarImages from "../../app/utils/avatarImages";

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

  useEffect(() => {
    setPlayerName("");
  }, [setPlayerName]);

  const closePopup = () => {
    setIsAvatarPopupOpen(false);
  };

  const handleAvatarClick = () => {
    setIsAvatarPopupOpen(true);
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    console.log(avatar);
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
          {avatarImages.map((avatar, i) => (
            <AvatarOption key={i} onClick={() => handleAvatarSelect(avatar)}>
              <img src={avatar.img} />
            </AvatarOption>
          ))}
        </AvatarPopup>
      )}
    </Container>
  );
}

export default CreateLobby;
