import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Textarea, ButtonContainer, Button, Title, SubTitle } from './Sins.styles';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import sinsData from '../../app/jsons/gameMastersSins.json';
import Theme from '../../components/Theme';
import { createSin, getPlayersWithoutSin } from '../../app/services/player';
import { PlayerContext } from '../../app/contexts/PlayerContext'; // Ajusta la ruta según donde tengas PlayerContext


function Sins() {
  const [text, setText] = useState("")
  const navigate = useNavigate();
  const [randomSin, setRandomSin] = useState("");
  const suggest = `Sugerencia: ${randomSin}`;
  const { playerId, roomId } = useContext(PlayerContext);

  const checkPlayersWithoutSin = async () => {
    const response = await getPlayersWithoutSin(roomId);
    const playersWithoutSin = response.data;
    return playersWithoutSin.length === 0;
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      // console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      const allPlayersDone = await checkPlayersWithoutSin();
      if (allPlayersDone) {
        navigate('/punishments');
      }
    }, 2000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, navigate]);

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
    // setRandomSin(e.target.value);
    setText(e.target.value);
  };


  // Punishers
  const handleNext = async () => {
    if (text === "") {
      alert("Introduzca un texto!!");
      return;
    }

    try {
      // console.log(roomId, text)
      await createSin(playerId, { sin: text });
    } catch (error) {
      // console.error("Error al crear el pecado:", error);
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
          {/* <textarea id="descriptionEvent" rows={10} cols={50} /> */}
          <Textarea type="text" value={text} onChange={handleInputChange} placeholder={suggest} />
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