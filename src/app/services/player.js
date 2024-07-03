import instance from './api';

// CREATE 
export const createPlayer = async (obj) => await instance.post('player/', obj);


//READ
export const getPlayerByRoomId = async (roomId) => await instance.get(`player/room/${roomId}`);