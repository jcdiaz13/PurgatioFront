import instance from './api';

// CREATE 
export const createRoom = async (obj) => await instance.post('room/', obj);

//READ

export const getRoomId = async () => await instance.get('room/');

export const getRoom = async () => await instance.get(`/`);


export const getRoomById = async (roomId) => {
  const response = await instance.get(`/room/${roomId}`);
  return response.data;
};

// UPDATE

export const gameStart = async (roomId) => await instance.put(`/room/${roomId}`);