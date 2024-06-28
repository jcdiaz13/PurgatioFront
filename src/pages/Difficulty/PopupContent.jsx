import { Popup, Overlay } from './Difficulty.styles';
import { StyledLink, Button } from '../JoinLobby/JoinLobby.styles';
import PropTypes from 'prop-types';

const PopupContent = ({ closePopup, image, description }) => (
  <>
    <Overlay onClick={closePopup} />
    <Popup>
      <img src={image} alt="" width="225px" />
      <p>{description}</p>
      <button onClick={closePopup}>Close</button>
      <StyledLink to={`/lobby`}>
        <Button>Start</Button>
      </StyledLink>
    </Popup>
  </>
);

PopupContent.propTypes = {
  closePopup: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PopupContent;
