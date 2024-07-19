import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Textarea, ButtonContainer, Button, Title, SubTitle } from './Sins.styles';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Theme from '../../components/Theme';
import { createSin, getPlayersWithoutSin, getPlayersWithAssign, AssignSins } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext'; // Ajusta la ruta según donde tengas PlayerContext

const sinsData = [
  { category: "Category1", sins: ["Sin1", "Sin2"] },
  { category: "Category2", sins: ["Sin3", "Sin4"] },
  // Add more categories and sins as needed
];

function Sins() {
  const [text, setText] = useState("");
  const [randomSin, setRandomSin] = useState("");
  const navigate = useNavigate();
  const { playerId, roomId, setSins } = useContext(PlayerContext);
  const suggest = `Sugerencia: ${randomSin}`;
  const { playerId, roomId, setPlayers, roomOwner } = useContext(PlayerContext);

  const checkPlayersWithoutSin = async () => {
    const response = await getPlayersWithoutSin(roomId);
    return response.data.length === 0;
  };
  let requestOneTime = false;

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const allPlayersDone = await checkPlayersWithoutSin();
      if (allPlayersDone) {
        if (!requestOneTime) {
          if (roomOwner) {
            requestOneTime = true;
            console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
            AssignSins(roomId);
          }
        }


        // TODO
        getPlayersWithAssign(roomId).then((res) => {
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa", res.data);
          setPlayers(res.data)
          const playerWithJudgeSin0 = res.data.find(player => player.judgeSin === 0);

          if (!playerWithJudgeSin0) {
            navigate('/punishments');
          } else {
            setPlayers(res.data);
          }
        });
      }
    }, 2000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  //CODIGO ANTIGUO HECHO POR FER.
  // EL PROBLEMA POR EL CUAL NO FUNCIONA ES QUE ESTAS HACIENDO LA COMPARACION ENTRE EL 0 Y LA PROMESA, TENDRIAS QUE HACER LA COMPARACION ENTRE EL 0 RES.DATA.LENGTH
  // useEffect(() => {
  //   setRandomSin(getRandomSin());
  //   // getPlayersWithoutSin(roomId).then((res)=>{
  //   //   console.log(res.data.length)
  //   // })
  //   const timeoutId = setInterval(() => {
  //     if (0 == getPlayersWithoutSin(roomId).then((res) => {
  //       res.data.length
  //     })) {
  //       navigate('/punishments');
  //     }
  //   }, 2000);
  //   return () => clearTimeout(timeoutId);
  // }, []);

  //ESTO LO COMENTO, PERO PARA LOS OTROS MODOS HABRA QUE USARLO
  /*   // Función para seleccionar una frase aleatoria
      const getRandomSin = () => {
        const randomCategory = sinsData[Math.floor(Math.random() * sinsData.length)];
        const randomSin = randomCategory.sins[Math.floor(Math.random() * randomCategory.sins.length)];
        return randomSin;
      };
   
    useEffect(() => {
      // Función para seleccionar una frase aleatoria
   
      const getRandomSin = () => {
        const randomCategory = sinsData[Math.floor(Math.random() * sinsData.length)];
        const randomSin = randomCategory.sins[Math.floor(Math.random() * randomCategory.sins.length)];
        return randomSin;
      };
      setRandomSin(getRandomSin());
    }, []);
   */
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleNext = async () => {
    if (!text.trim()) {
      alert("Introduzca un texto!!");
      return;
    }

    try {
      await createSin(playerId, { sin: text });
      setSins({ sin: text });
      navigate('/punishments');
    } catch (error) {
      console.error("Error al crear el pecado:", error);
    }
  };

  const handleGoLobby = () => {
    navigate('/lobby');
  };

  return (
    <Theme>
      <Container>
        <FormContainer>
          <Title>Pecados</Title>
          <SubTitle>Escribe uno de tus pecados:</SubTitle>
          <Textarea
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder={suggest}
          />
          <ButtonContainer>
            <Button onClick={handleGoLobby}><FaArrowLeft /></Button>
            <Button onClick={handleNext}><FaArrowRight /></Button>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Theme>
  );
}

export default Sins;
