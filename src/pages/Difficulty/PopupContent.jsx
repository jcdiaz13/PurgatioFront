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
  Box,
  Name,
  Description,
  ButtonContainer,
} from "./PopupContent.styles";

const PopupContent = ({ closePopup, image, name, description, difficulty }) => {
  const { playerName, setRoomId, setPlayerId, selectedAvatar, setRoomOwner } =
    useContext(PlayerContext);
  const navigate = useNavigate();
  const handleCreateRoom = async () => {
    try {
      const room = await createRoom({ gamemode: difficulty });
      setRoomId(room.data.id);
      console.log("111111111111111111111", selectedAvatar.img);
      const player = await createPlayer({
        playerName: playerName,
        avatarId: selectedAvatar.id,
        room: {
          id: room.data.id,
        },
      });

      setRoomOwner(true); // Establecer como propietario de la sala al jugador que crea la sala
      console.log("fffffffffffffffffff", player.data.id);
      setPlayerId(player.data.id);
      navigate("/lobby");
    } catch (error) {
      console.error("Error creating room or player:", error);
    }
  };

  return (
    <>
      <Overlay onClick={closePopup} />
      <Popup>
        <Box>
          <img src={image} alt="" width="225px" />
        </Box>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <ButtonContainer>
          <Button onClick={closePopup}> Back</Button>
          <StyledLink to={`/lobby`}>
            <Button onClick={handleCreateRoom}>Start</Button>
          </StyledLink>
        </ButtonContainer>
      </Popup>
    </>
  );
};

PopupContent.propTypes = {
  closePopup: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
};

export default PopupContent;
