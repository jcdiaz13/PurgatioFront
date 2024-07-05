import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { PlayerContext } from "../../app/contexts/PlayerContext";
import { createRoom } from "../../app/services/room";
import { createPlayer } from "../../app/services/player";
import {
  Popup,
  Overlay,
  StyledLink,
  Button,
  ButtonClose,
  Box,
  Name,
  Description,
} from "./PopupContent.styles";

const PopupContent = ({ closePopup, image, name, description }) => {
  const { playerName, setRoomId } = useContext(PlayerContext); // Obtener el nombre del jugador desde el contexto
  const navigate = useNavigate();
  const handleCreateRoom = async () => {
    try {
      const room = await createRoom({});
      setRoomId(room.data.id);

      await createPlayer({
        playerName: playerName,
        room: {
          id: room.data.id,
        },
      });
      navigate("/lobby");
    } catch (error) {
      console.error("Error creating room or player:", error);
    }
  };

  return (
    <>
      <Overlay onClick={closePopup} />
      <Popup>
        <ButtonClose onClick={closePopup}> X</ButtonClose>
        <Box>
          <img src={image} alt="" width="225px" />
        </Box>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <StyledLink to={`/lobby`}>
          <Button onClick={handleCreateRoom}>Start</Button>
        </StyledLink>
      </Popup>
    </>
  );
};

PopupContent.propTypes = {
  closePopup: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PopupContent;
