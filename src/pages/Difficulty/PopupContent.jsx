import { useContext, useEffect } from "react";
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
      const player = await createPlayer({
        playerName: playerName,
        avatarId: selectedAvatar.id,
        room: {
          id: room.data.id,
        },
      });

      setRoomOwner(true);
      setPlayerId(player.data.id);

      // Ensuring state updates before navigation
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
          <StyledLink to="#">
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
