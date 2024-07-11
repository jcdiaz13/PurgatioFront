import { Title, Container, Box, BoxContainer } from "./Difficulty.styles";
import { useContext, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import GlobalStyle from "../../app/style/createGlobal.styles";
import verdugo from "../../app/assets/gifs/Executioner.gif";
import mago from "../../app/assets/gifs/Wizard.gif";
import hada from "../../app/assets/gifs/fairy.gif";
import PopupContent from "./PopupContent";

const Difficulty = () => {
  const { playerName } = useContext(PlayerContext); // Obtener el nombre del jugador desde el contexto
  const [popup, setPopup] = useState(null);

  const popups = [
    {
      id: 1,
      image: verdugo,
      name: "VERDUGO",
      description:
        "Esta es la dificultad más alocada, con pecados e historias más locas y castigos más severos!",
    },
    {
      id: 2,
      image: mago,
      name: "MAGO",
      description:
        "Esta es la dificultad estándar, podrás añadir tus pecados e historias y la gente te juzgará y castigará dependiendo de la magnitud de ellos!",
    },
    {
      id: 3,
      image: hada,
      name: "HADA",
      description:
        "Esta es la dificultad más 'light', podrás añadir tus pecados e historias y seleccionarás un castigo para el pecado en las opciones que te mostramos!",
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
            difficulty={popup.id}
          />
        )}
      </Container>
    </>
  );
};

export default Difficulty;
