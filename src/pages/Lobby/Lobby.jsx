import { LobbyContainer, CirclesContainer, Circle ,Title,Container,Box,Popup,Overlay} from "./Lobby.styles";
import { useContext,useState } from "react";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import verdugo from '../../app/img/pikaso_texttoimage_35mm-film-photography-bloody-executioner-avatar-pi.jpeg'
import mago from '../../app/img/rendering-wizard-controlling-magic.jpg'
import hada from '../../app/img/pikaso_texttoimage_sweet-fairy-impressive-surreal-cinematic-lighting-.jpeg'

const PopupContent = ({ closePopup, image, description }) => (
  <>
    <Overlay onClick={closePopup} />
    <Popup>
      <img src={image} alt="" width="225px" />
      <p>{description}</p>
      <button onClick={closePopup}>Close</button>
    </Popup>
  </>
);
const Lobby = () => {
  const { playerName } = useContext(PlayerContext); // Obtener el nombre del jugador desde el contexto

  const [popup, setPopup] = useState(null);

  const popups = [
    {
      image: verdugo,
      description: 'Verdugo',
    },
    {
      image: mago,
      description: 'Mago',
    },
    {
      image: hada,
      description: 'Hada',
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
