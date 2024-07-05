import { useContext, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { useNavigate } from "react-router-dom";
import dwarf from '../../app/img/dwarf.jpg';
import undead from '../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg'
import wizard from '../../app/img/rendering-wizard-controlling-magic.jpg'
import fairy from '../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg'
import elf from '../../app/img/elf.jpg';
import executione2 from '../../app/img/executione2.jpg';
import witch from '../../app/img/witch.jpg';
import minotaur from '../../app/img/minotaur.jpg';


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
  <img src={dwarf}/>,
  <img src={undead}/>,
  <img src={wizard}/>,
  <img src={fairy}/>,
  <img src={elf}/>,
  <img src={executione2}/>,
  <img src={witch}/>,
  <img src={minotaur}/>,
];

function CreateLobby() {
  const { playerName, setPlayerName, selectedAvatar, setSelectedAvatar } = useContext(PlayerContext);
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
          {avatars.map((avatar, i) => (
            <AvatarOption
              key={i}
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
