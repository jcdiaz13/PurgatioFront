// DisplayCombinedData.jsx

import { useState } from 'react';
import { combineData } from './combineData'; // Importa la función combineData
import combinedData from '../../app/jsons/gameMasters.json'; // Importa los datos combinados desde el archivo JSON
import { containerStyle, imageStyle, tableStyle, buttonStyle, } from './DisplayCombine.style'; // Importa los estilos desde el archivo styles

const DisplayCombinedData = () => {
  // Combina los datos de sins y punishments usando combineData
  const combinedCharacters = combineData(combinedData);

  // Estado para manejar la combinación activa
  const [activeCombination, setActiveCombination] = useState(null);

  // Función para manejar la combinación de sin y punishment
  const handleCombine = (characterId, sin, punishment) => {
    // Aquí puedes manejar la lógica para cuando se combine un sin con un punishment
    console.log(`Combinado: ${sin} con ${punishment}`);
    setActiveCombination({ characterId, sin, punishment });
  };

  return (
    <div>
      {combinedCharacters.map((character) => (
        <div key={character.id} style={containerStyle}>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          <img src={character.img} alt={character.name} style={imageStyle} />
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Sin</th>
                <th>Punishment</th>
                <th>Combine</th>
              </tr>
            </thead>
            <tbody>
              {character.combined.map((pair, index) => (
                <tr key={index}>
                  <td>{pair.sin}</td>
                  <td>{pair.punishment}</td>
                  <td>
                    <button
                      style={buttonStyle}
                      onClick={() =>
                        handleCombine(character.id, pair.sin, pair.punishment)
                      }
                    >
                      Combine
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      {/* Muestra la combinación activa si existe */}
      {activeCombination && (
        <div style={{ marginTop: '20px' }}>
          <h3>Última combinación:</h3>
          <p>
            Personaje: {activeCombination.characterId} <br />
            Sin: {activeCombination.sin} <br />
            Punishment: {activeCombination.punishment}
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayCombinedData;
