import instance from './api';

// CREATE 
export const createPlayer = async (obj) => await instance.post('player/', obj);

export const createSin = async (playerId, { sin }) => await instance.post(`player/${playerId}/sin`, { sin });

//READ
export const getPlayersByRoomId = async (roomId) => await instance.get(`player/room/${roomId}`);

export const getPlayersWithoutSin = async (roomId) => await instance.get(`player/nosin/${roomId}`);

export const AssignSins = async (roomId) => {
    console.log(roomId, 11111);
    const data = await instance.get(`player/assign/${roomId}`);
    console.log("22222");
    return data.data;
}

export const getSins = async (roomId) => {
    console.log(roomId, 101010101);
    const response = await instance.get(`player/assign/${roomId}`);
    console.log(response.data, 3333333);
    return response.data;  // Devuelve los datos obtenidos de la API
};

//DELETE

export const deletePlayer = async (playerId) => await instance.delete(`player/${playerId}`);



