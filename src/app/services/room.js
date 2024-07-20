import instance from './api';

// CREATE 
export const createRoom = async (obj) => await instance.post('room/', obj);

export const setGameStatus = (roomId, gameStarted) => instance.post(`room/${roomId}/gameStatus`, gameStarted);

//READ

export const getRoomId = async () => await instance.get('room/');

export const getRoom = async () => await instance.get(`/`);

export const getRoomById = async (roomId) => (await instance.get(`/room/${roomId}`)).data;

export const getGameStatus = async (roomId) => (await instance.get(`/room/${roomId}`)).data.gameStarted;