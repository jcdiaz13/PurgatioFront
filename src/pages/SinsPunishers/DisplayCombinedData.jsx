// DisplayCombinedData.jsx

import { useState } from 'react';
import { combineData } from './combineData'; // Importa la función combineData
import combinedData from '../../app/jsons/gameMasters.json'; // Importa los datos combinados desde el archivo JSON
import {
  CharacterContainer, CharacterDescription, CharacterImage, CombinedTable, TableHeader, TableCell,
  CombineButton, ActiveCombination, ActiveCombinationTitle, ActiveCombinationText,
} from './DisplayCombine.style'; // Importa los styled components desde el archivo

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
        <CharacterContainer key={character.id}>
          <h2>{character.name}</h2>
          <CharacterDescription>{character.description}</CharacterDescription>
          <CharacterImage src={character.img} alt={character.name} />
          <CombinedTable>
            <thead>
              <tr>
                <TableHeader>Sin</TableHeader>
                <TableHeader>Punishment</TableHeader>
                <TableHeader>Combine</TableHeader>
              </tr>
            </thead>
            <tbody>
              {character.combined.map((pair, index) => (
                <tr key={index}>
                  <TableCell>{pair.sin}</TableCell>
                  <TableCell>{pair.punishment}</TableCell>
                  <TableCell>
                    <CombineButton onClick={() => handleCombine(character.id, pair.sin, pair.punishment)}>
                      Combine
                    </CombineButton>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </CombinedTable>
        </CharacterContainer>
      ))}
      {/* Muestra la combinación activa si existe */}
      {activeCombination && (
        <ActiveCombination>
          <ActiveCombinationTitle>Última combinación:</ActiveCombinationTitle>
          <ActiveCombinationText>
            Personaje: {activeCombination.characterId} <br />
            Sin: {activeCombination.sin} <br />
            Punishment: {activeCombination.punishment}
          </ActiveCombinationText>
        </ActiveCombination>
      )}
    </div>
  );
};

export default DisplayCombinedData;
