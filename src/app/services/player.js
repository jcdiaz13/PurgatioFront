import instance from './api';

// CREATE 
export const createPlayer = async (obj) => await instance.post('player/', obj);


// JOIN ROOM
export const joinRoom = async (obj) => {
    try {
        const response = await instance.post('player/join', obj);
        return response.data;
    } catch (error) {
        console.error("Error joining room:", error);
        throw error;
    }
};

// GET PLAYERS BY ROOM ID
export const getPlayersByRoomId = async (roomId) => {
  try {
    const response = await instance.get(`room/${roomId}/players`);
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

