


import { Title, Container, Box, BoxContainer } from "./Difficulty.styles";
import { useContext, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import GlobalStyle from "../../app/style/createGlobal.styles";
import verdugo from "../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg";
import mago from "../../app/img/rendering-wizard-controlling-magic.jpg";
import hada from "../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg";
import PopupContent from "./PopupContent"

const Difficulty = () => {
  const { playerName } = useContext(PlayerContext); // Obtener el nombre del jugador desde el contexto

  const [popup, setPopup] = useState(null);

  const popups = [
    {
      id: 1,
      image: verdugo,
      name: "Verdugo",
      description: "Esta es la dificultad mas alocada, con pecados e histroias mas locas y castigos más severos!",
    },
    {
      id: 2,
      image: mago,
      name: "Mago",
      description: "Mage",
    },
    {
      id: 3,
      image: hada,
      name: "Hada",
      description: "Fairy",
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
      <GlobalStyle />
      <Container>



        <BoxContainer>
          <Title>{playerName}, elige tu destino! </Title>

          {popups.map((popup, index) => (
            <Box key={index} onClick={() => handleClick(index)}>
              <img src={popup.image}></img>
            </Box>
          ))}
        </BoxContainer>
        {popup && (
          <PopupContent
            closePopup={closePopup}
            image={popup.image}
            name={popup.name}
            description={popup.description}
          />
        )}
      </Container>
    </>


  );
};

export default Difficulty;
