import instance from './api';

// CREATE 
// export const createAdmin = async (obj) => await instance.post('player/admin', obj);

export const createPlayer = async (obj) => await instance.post('player/', obj);


//READ

export const getPlayersByRoomId = async (roomId) => await instance.get(`player/room/${roomId}`);
