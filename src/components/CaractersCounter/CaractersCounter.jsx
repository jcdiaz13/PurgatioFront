import React from "react";
import PropTypes from "prop-types";
import { Container } from "./CaractersCounter.styles";

function CaractersCounter({ text, maxLength }) {
  // Calcular los caracteres restantes
  const remainingCharacters = maxLength - text.length;

  return (
    <Container style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <div
        style={{
          marginTop: "10px",
          textAlign: "right",
          color: remainingCharacters < 0 ? "red" : "black",
        }}
      >
        {text.length}/300
      </div>
    </Container>
  );
}

// PropTypes para asegurar que las propiedades sean del tipo correcto
CaractersCounter.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default CaractersCounter;
