export const combineData = (sinsDataArrays, punishmentsDataArrays) => {
  const combinedData = [];

  // Verificar y manejar casos donde los datos no son arrays estándar
  if (!Array.isArray(sinsDataArrays) || !Array.isArray(punishmentsDataArrays)) {
    console.error('Los datos de entrada no son arrays válidos');
    return combinedData; // Devolver un array vacío si los datos no son válidos
  }

  // Iterar sobre sinsDataArrays (asumiendo que puede ser un array de objetos)
  sinsDataArrays.forEach((sinsData, index) => {
    // Verificar si punishmentsDataArrays[index] es un objeto con propiedad "punishments"
    const punishmentsData = punishmentsDataArrays[index];
    if (typeof punishmentsData !== 'object' || !punishmentsData.hasOwnProperty('punishments')) {
      console.error(`Los datos en el índice ${index} de punishmentsDataArrays no son válidos`);
      return; // Saltar esta iteración si no es un objeto válido con propiedad "punishments"
    }

    // Iterar sobre los personajes en sinsData
    sinsData.forEach((character) => {
      const combined = character.sins.map((sin, idx) => ({
        sin,
        punishment: punishmentsData.punishments[idx] || 'Sin castigo definido', // Manejar el caso donde no hay castigo definido
      }));

      combinedData.push({
        ...character,
        punishments: punishmentsData.punishments,
        combined,
      });
    });
  });

  return combinedData;
};
