import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Book,
  Cover,
  Container,
  OptionButton,
  OptionContainer,
  BackgroundText,
} from "./GameOver.styles.js";
import turtle from "../../app/assets/gifs/tortuga.gif";
import { ImHammer2 } from "react-icons/im";
import { getVotedPlayers } from "../../app/services/player";
import { PlayerContext } from "../../app/contexts/PlayerContext";
const options = [
  { id: 2, image: turtle, text: "Tortuga" },
  // Agrega más avatares si es necesario
];

const sins = [
  {
    id: 1,
    text: "Lujuria",
    punishment: "Serás condenado a la tentación eterna.",
  },
  {
    id: 2,
    text: "Gula",
    punishment: "Serás forzado a comer sin saciarte nunca.",
  },
  {
    id: 3,
    text: "Avaricia",
    punishment: "Serás rodeado de riquezas inalcanzables.",
  },
  { id: 4, text: "Pereza", punishment: "Serás inmovilizado para siempre." },
  { id: 5, text: "Ira", punishment: "Serás consumido por el fuego eterno." },
  { id: 6, text: "Envidia", punishment: "Serás eternamente insatisfecho." },
  { id: 7, text: "Soberbia", punishment: "Serás humillado eternamente." },
];

const GameOver = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showGameOverText, setShowGameOverText] = useState(false); // New state for text visibility
  const [selectedSin] = useState(sins[Math.floor(Math.random() * sins.length)]);
  const { roomId, playerId } = useContext(PlayerContext);
  const [punishedPlayers, setPunishedPlayers] = useState({});

  useEffect(() => {
    getVotedPlayers(roomId).then((res) => {
      setPunishedPlayers(res.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowGameOverText(true); // Show GAME OVER text on selection
  };

  const goToNextPage = () => {
    navigate("/");
  };

  return (
    <Container>
      {console.log("lista castigados: ", punishedPlayers)}
      {showGameOverText && <BackgroundText>GAME OVER</BackgroundText>}{" "}
      {/*Conditionally render text*/}
      <Book>
        <Cover>
          {selectedOption ? (
            <>
              <img src={selectedOption.image} alt={selectedOption.text} />
              <p>{selectedSin.text}</p>
              <p>{selectedSin.punishment}</p>
            </>
          ) : (
            <p>Selecciona un avatar para ver tu destino.</p>
          )}
        </Cover>
      </Book>
      <OptionContainer>
        {options.map(({ id, image, text }) => (
          <OptionButton
            key={id}
            onClick={() => handleOptionSelect({ id, image, text })}
          >
            <ImHammer2 />
          </OptionButton>
        ))}
      </OptionContainer>
      {selectedOption && (
        <OptionButton onClick={goToNextPage}>
          Ir a la Siguiente Página
        </OptionButton>
      )}
    </Container>
  );
};

export default GameOver;
