<<<<<<< HEAD
import { Title, Container, Box, Popup, Overlay } from "./Lobby.styles";
import { useContext, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import verdugo from '../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg'
import mago from '../../app/img/rendering-wizard-controlling-magic.jpg'
import hada from '../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg'
import {StyledLink, Button} from '../JoinLobby/JoinLobby.styles';
=======
import React from 'react'
>>>>>>> f0788e84438b61d228a22c0cbaa27de0147afe57

const Lobby = () => {
<<<<<<< HEAD
  const { playerName, roomId } = useContext(PlayerContext); // Obtener el nombre del jugador desde el contexto

  const [popup, setPopup] = useState(null);

  const popups = [
    {
      id:1,
      image: verdugo,
      description: 'Executioner',
    },
    {
      id:2,
      image: mago,
      description: 'Mage',
    },
    {
      id:3,
      image: hada,
      description: 'Fairy',
    },
  ];

  const handleClick = (index) => {
    setPopup(popups[index]);
  };

  const closePopup = () => {
    setPopup(null);
  };
  return (
    <>
      <Title>{playerName}, elige tu destino! </Title>
      <div>
        <Container>
          {popups.map((popup, index) => (
            <Box key={index} onClick={() => handleClick(index)}>
              <img src={popup.image}></img>
            </Box>
          ))}
        </Container>
        {popup && (
          <PopupContent
            closePopup={closePopup}
            image={popup.image}
            description={popup.description}
          />
        )}
      </div>
    </>
  );
};

export default Lobby;
=======
  return (
    <div>Lobby</div>
  )
}

export default Lobby
>>>>>>> f0788e84438b61d228a22c0cbaa27de0147afe57
