// combineData.js
export const combineData = (sinsDataArrays, punishmentsDataArrays) => {
  const combinedData = [];

  // Determinamos el mínimo entre la longitud de sinsDataArrays y punishmentsDataArrays
  const minLength = Math.min(sinsDataArrays.length, punishmentsDataArrays.length);

  // Iteramos hasta el mínimo de los dos arrays
  for (let i = 0; i < minLength; i++) {
    const sinsData = sinsDataArrays[i];
    const punishmentsData = punishmentsDataArrays[i];

    if (!sinsData || !punishmentsData) {
      continue; // Salta esta iteración si alguno de los datos es undefined
    }

    // Iteramos sobre los personajes en sinsData
    sinsData.forEach((character, index) => {
      // Verificamos si punishmentsData tiene suficientes elementos
      const punishment = punishmentsData.punishments[index] || ''; // Por si no hay suficientes punishments

      const combined = {
        ...character,
        punishment, // Asignamos el castigo directamente
      };

      combinedData.push(combined);
    });
  }

  return combinedData;
};

