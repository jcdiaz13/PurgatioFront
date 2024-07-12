import instance from './api';

// CREATE 
export const createRoom = async (obj) => await instance.post('room/', obj);

//READ

export const getRoomId = async () => await instance.get('room/');

export const getRoom = async () => await instance.get(`/`)