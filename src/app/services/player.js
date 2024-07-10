import instance from './api';

// CREATE 
export const createPlayer = async (obj) => await instance.post('player/', obj);

export const createSin = async (playerId, { sin }) => {
    console.log(playerId, 11111111, sin);
    await instance.post(`player/${playerId}/sin`, { sin });
}

//READ
export const getPlayersByRoomId = async (roomId) => await instance.get(`player/room/${roomId}`);

export const getSinsToEvaluate = async () => await instance.get('/sins');

export const getAssignedStories = async (roomId) => await instance.get(`/player/asignar-historias?roomId=${roomId}`);
