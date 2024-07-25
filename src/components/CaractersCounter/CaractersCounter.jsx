import React from "react";
import PropTypes from "prop-types";
import { Container, Contador } from "./CaractersCounter.styles";

function CaractersCounter({ text, maxLength }) {
  // Calcular los caracteres restantes
  const remainingCharacters = maxLength - text.length;

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
