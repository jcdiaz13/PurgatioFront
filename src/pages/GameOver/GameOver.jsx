import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Book,
  Cover,
  Container,
  OptionButton,
  OptionContainer,
  BackgroundText,
  PlayerCard,
  PlayerName,
  Avatar,
  Message
} from "./GameOver.styles";
import turtle from "../../app/assets/gifs/tortuga.gif";
import { ImHammer2 } from "react-icons/im";
import { getVotedPlayers } from "../../app/services/player";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import avatarImages from "../../app/utils/avatarImages";

const options = [
  { id: 2, image: turtle, text: "Tortuga" },
  // Agrega más avatares si es necesario
];

const sins = [
  { id: 1, text: "Lujuria", punishment: "Serás condenado a la tentación eterna." },
  { id: 2, text: "Gula", punishment: "Serás forzado a comer sin saciarte nunca." },
  { id: 3, text: "Avaricia", punishment: "Serás rodeado de riquezas inalcanzables." },
  { id: 4, text: "Pereza", punishment: "Serás inmovilizado para siempre." },
  { id: 5, text: "Ira", punishment: "Serás consumido por el fuego eterno." },
  { id: 6, text: "Envidia", punishment: "Serás eternamente insatisfecho." },
  { id: 7, text: "Soberbia", punishment: "Serás humillado eternamente." },
];

const GameOver = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showGameOverText, setShowGameOverText] = useState(false);
  const [selectedSin] = useState(sins[Math.floor(Math.random() * sins.length)]);
  const { roomId } = useContext(PlayerContext);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    const fetchVotedPlayers = async () => {
      try {
        const response = await getVotedPlayers(roomId);
        setLosers(response.data);
      } catch (error) {
        console.error("Error fetching voted players:", error);
      }
    };

    fetchVotedPlayers();
  }, [roomId]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowGameOverText(true);
  };

  const goToNextPage = () => {
    navigate("/");
  };

  const getAvatarImg = (avatarId) => {
    const avatar = avatarImages.find((img) => img.id === avatarId);
    return avatar ? avatar.img : "default_avatar_path.png";
  };

  return (
    <Container>
      {showGameOverText && <BackgroundText>GAME OVER</BackgroundText>}
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
      <h1>Lista de Jugadores Castigados</h1>
      {losers.length > 0 ? (
        losers.map((player) => (
          <PlayerCard key={player.id}>
            <Avatar src={getAvatarImg(player.avatarId)} alt={player.playerName} />
            <PlayerName>{player.playerName}</PlayerName>
          </PlayerCard>
        ))
      ) : (
        <Message>No players have lost the game.</Message>
      )}
    </Container>
  );
};

export default GameOver;

// import { useEffect, useContext, useState } from "react";
// import { PlayerContext } from "../../app/contexts/PlayerContext";
// import { getVotedPlayers } from "../../app/services/player";
// import avatarImages from "../../app/utils/avatarImages";
// import {
//   Container,
//   PlayerCard,
//   PlayerName,
//   Avatar,
//   Button
// } from "./GameOver.styles";

// const GameOver = () => {
//   const { roomId } = useContext(PlayerContext); // Obtener roomId del contexto
//   const [losers, setLosers] = useState([]); // Estado para guardar jugadores que han perdido

//   useEffect(() => {
//     const fetchVotedPlayers = async () => {
//       try {
//         const response = await getVotedPlayers(roomId);
//         const votedPlayers = response.data; // Datos de la respuesta
//         setLosers(votedPlayers); // Actualizar el estado con los jugadores perdedores
//       } catch (error) {
//         console.error("Error fetching voted players:", error); // Manejo de errores
//       }
//     };

//     fetchVotedPlayers(); // Llamar a la función para obtener los jugadores perdedores
//   }, [roomId]); // Dependencia en roomId para volver a ejecutar cuando cambie

//   // Función para obtener la URL de la imagen del avatar basado en el ID
//   const getAvatarImg = (avatarId) => {
//     const avatar = avatarImages.find((img) => img.id === avatarId);
//     return avatar ? avatar.img : "default_avatar_path.png"; // Imagen predeterminada
//   };

//   return (
//     <Container>
//       <h1>Game Over</h1>
//       {losers.length > 0 ? (
//         losers.map((player) => (
//           <PlayerCard key={player.id}>
//             <Avatar src={getAvatarImg(player.avatarId)} alt={player.playerName} />
//             <PlayerName>{player.playerName}</PlayerName>
//           </PlayerCard>
//         ))
//       ) : (
//         <p>No players have lost the game.</p>
//       )}
//       <Button onClick={() => window.location.reload()}>Retry</Button> {/* Botón de ejemplo para recargar la página */}
//     </Container>
//   );
// };

// export default GameOver;
