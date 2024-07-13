import instance from './api';

// CREATE 
export const createRoom = async (obj) => await instance.post('room/', obj);

//READ

export const getRoomId = async () => await instance.get('room/');

export const getRoom = async () => await instance.get(`/`);

// export const getRoomById = async (roomId) => await instance.get(`/${roomId}`)


export const getRoomById = async (roomId) => {
  try {
    const response = await instance.get(`/room/${roomId}`);
    console.log('Response data:', response.data); // Loguea la respuesta para verificar los datos recibidos
    return response.data;
  } catch (error) {
    if (error.response) {
      // La solicitud fue realizada, pero el servidor respondió con un código de estado diferente de 2xx
      console.error('Error de respuesta:', error.response.data);
      console.error('Código de estado:', error.response.status);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió ninguna respuesta
      console.error('No se recibió respuesta:', error.request);
    } else {
      // Ocurrió un error durante la configuración de la solicitud
      console.error('Error de configuración de la solicitud:', error.message);
    }
    throw new Error(`Error al obtener la habitación con ID ${roomId}: ${error.message}`);
  }
};
