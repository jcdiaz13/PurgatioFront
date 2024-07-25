import PropTypes from "prop-types";
import { Container, Contador } from "./CaractersCounter.styles";

function CaractersCounter({ text }) {
  // Calcular los caracteres restantes


  return (
    <Container>
      <Contador>
        {text.length}/300
      </Contador>
    </Container>
  );
}

// PropTypes para asegurar que las propiedades sean del tipo correcto
CaractersCounter.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default CaractersCounter;
