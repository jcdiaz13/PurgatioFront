// import { useState, useEffect, useContext } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Container,
//   FormContainer,
//   Textarea,
//   ButtonContainer,
//   Button,
//   Title,
//   SubTitle,
// } from "./Punishments.styles";
// import { FaArrowLeft } from "react-icons/fa";
// import Theme from '../../components/Theme';
// import { getPlayersWithAssign } from '../../app/services/player';
// import { PlayerContext } from '../../app/contexts/PlayerContext';

// const Punishments = () => {
//   const [isTextareaModified, setIsTextareaModified] = useState(false);
//   const navigate = useNavigate();
//   const { roomId, playerId } = useContext(PlayerContext);
//   const [assignSin, setAssignSin] = useState("");

//   useEffect(() => {
//     if (roomId && playerId) {
//       const intervalId = setInterval(() => {
//         ShowJudgeSin();
//       }, 2000);

//       return () => clearInterval(intervalId); // Cleanup interval on component unmount
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [roomId, playerId]);

//   const ShowJudgeSin = async () => {
//     try {
//       const response = await getPlayersWithAssign(roomId);
//       const players = response.data;
//       console.log("Players:", players);
//       const player = players.find(player => player.id === playerId);
//       console.log("Jugador actual:", player);
//       if (player) {
//         const judgePlayer = players.find(judge => judge.id === player.judgeSin);
//         console.log("Jugador que tengo que juzgar:", judgePlayer);
//         if (judgePlayer) {
//           setAssignSin(judgePlayer.sin);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching player assignments", error);
//     }
//   };

//   const handleGoToSins = () => {
//     navigate("/sins");
//   };

//   const handleNext = () => {
//     if (!isTextareaModified) {
//       alert("Por favor, modifique el texto antes de continuar.");
//       return;
//     }
//     navigate("/");
//   };

// return (
//   <Theme>
//     <Container>
//       <FormContainer>
//         <Title>Pecado</Title>
//         {
//           console.log('Pecado asignado:', assignSin)
//         }
//         {assignSin} {/* ESTADO QUE CONTIENE EL PECADO DEL DESTINATARIO */}
//         <SubTitle>Castigos</SubTitle>
//         {/* <p>{randomSin}</p> */}
//         <Textarea />
//         {/* onChange={handlePunishmentChange} placeholder={suggest} en text area */}
//         <ButtonContainer>
//           <Button onClick={handleGoToSins}>
//             {" "}
//             <FaArrowLeft />
//           </Button>
//           <Link to="/verdict">
//             <Button>Enviar</Button>
//           </Link>
//         </ButtonContainer>
//       </FormContainer>
//     </Container>
//   </Theme>
// );
// };

// export default Punishments;

import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Textarea,
  ButtonContainer,
  Button,
  Title,
  SubTitle,
} from "./Punishments.styles";
import { FaArrowLeft } from "react-icons/fa";
import Theme from '../../components/Theme';
import { getPlayersWithAssign } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext';

const Punishments = () => {
  const [isTextareaModified, setIsTextareaModified] = useState(false);
  const navigate = useNavigate();
  const { roomId, playerId, players, setPlayers } = useContext(PlayerContext);
  const [assignSin, setAssignSin] = useState("");

  useEffect(() => {
    if (roomId && playerId) {
      showJudgeSin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, playerId]);

  const showJudgeSin = async () => {

    console.log("Players:", players);

    const player = players.find(player => player.id === playerId);
    console.log("Jugador actual:", player);

    if (player) {
      const judgePlayer = players.find(judge => judge.id === player.judgeSin);
      console.log("Jugador que tengo que juzgar:", judgePlayer);

      if (judgePlayer)
        setAssignSin(judgePlayer.sin);
    }
  };


  const handleGoToSins = () => {
    navigate("/sins");
  };

  const handleNext = () => {
    if (!isTextareaModified) {
      alert("Por favor, modifique el texto antes de continuar.");
      return;
    }
    navigate("/");
  };

  return (
    <Theme>
      <Container>
        <FormContainer>
          <Title>Pecado</Title>
          {
            console.log('Pecado asignado:', assignSin)
          }
          {assignSin} {/* ESTADO QUE CONTIENE EL PECADO DEL DESTINATARIO */}
          <SubTitle>Castigos</SubTitle>
          {/* <p>{randomSin}</p> */}
          <Textarea />
          {/* onChange={handlePunishmentChange} placeholder={suggest} en text area */}
          <ButtonContainer>
            <Button onClick={handleGoToSins}>
              {" "}
              <FaArrowLeft />
            </Button>
            <Link to="/verdict">
              <Button>Enviar</Button>
            </Link>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
};

export default Punishments;

