import { Title, Container, Box, BoxContainer } from "./Difficulty.styles";
import { useContext, useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import GlobalStyle from "../../app/style/createGlobal.styles";
import PopupContent from "./PopupContent";
import gameMasters from "../../app/utils/gameMasters";
const Difficulty = () => {
  const { playerName } = useContext(PlayerContext); // Obtener el nombre del jugador desde el contexto
  const [popup, setPopup] = useState(null);

  const handleClick = (index) => {
    setPopup(gameMasters[index]);
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

          {gameMasters.map((gameMaster, index) => (
            <Box key={index} onClick={() => handleClick(index)}>
              <img src={gameMaster.img}></img>
            </Box>
          ))}
        </BoxContainer>
        {popup && (
          <PopupContent
            closePopup={closePopup}
            image={popup.img}
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
