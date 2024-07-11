/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import turtle from "../../app/gifs/tortuga.gif";
import pinkguy from "../../app/gifs/pinkfinn.gif";
import tronco from "../../app/gifs/tronco.gif";
import camaleon from "../../app/gifs/camaleon.gif";
import glassguy from "../../app/gifs/glassguy.gif";
import bunny from "../../app/gifs/bunny.gif"
import pig from "../../app/gifs/pig.gif";
import maskguy from "../../app/gifs/maskguy.gif";
import interrogante from "../../app/gifs/question.gif";

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
  <img src={turtle} />,
  <img src={pig} />,
  <img src={pinkguy} />,
  <img src={bunny} />,
  <img src={glassguy} />,
  <img src={camaleon} />,
  <img src={maskguy} />,
  <img src={tronco} />
];

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
          {selectedAvatar ? selectedAvatar : <img src={interrogante} />}
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
          <Button onClick={handlePlayerNameAndAvatar}>Crear</Button>
        </ButtonContainer>
      </FormContainer>
      {isAvatarPopupOpen && (
        <AvatarPopup>
          {avatars.map((avatar, i) => (
            <AvatarOption key={i} onClick={() => handleAvatarSelect(avatar)}>
              {avatar}
            </AvatarOption>
          ))}
        </AvatarPopup>
      )}
    </Container>
  );
}

export default CreateLobby;
