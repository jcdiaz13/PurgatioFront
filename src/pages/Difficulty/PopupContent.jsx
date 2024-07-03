import { Popup, Overlay,StyledLink, Button,ButtonClose, Box ,Name, Description} from './PopupContent.styles';
import PropTypes from 'prop-types';

const PopupContent = ({ closePopup, image,name, description }) => (
  <>
    <Overlay onClick={closePopup} />
    <Popup>
    <ButtonClose onClick={closePopup}> X</ButtonClose>
    <Box><img src={image} alt="" width="225px" /></Box>
    <Name>{name}</Name>
      <Description>{description}</Description>      
      <StyledLink to={`/lobby`}>
        <Button>Start</Button>
      </StyledLink>
    </Popup>
  </>
);

PopupContent.propTypes = {
  closePopup: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PopupContent;
