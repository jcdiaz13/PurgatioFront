import instance from "./api";

// CREATE
export const createPlayer = async (obj) => await instance.post("player/", obj);

export const createSin = async (playerId, { sin }) =>
  await instance.post(`player/${playerId}/sin`, { sin });

export const createPunish = async (playerId, { punish }) =>
  await instance.post(`player/${playerId}/punish`, { punish });

//READ
export const getPlayersByRoomId = async (roomId) =>
  await instance.get(`player/room/${roomId}`);

export const getPlayersWithoutSin = async (roomId) =>
  await instance.get(`player/nosin/${roomId}`);

export const getPlayersWithoutPunish = async (roomId) =>
  await instance.get(`player/nopunish/${roomId}`);

export const getPlayersWithAssign = async (roomId) =>
  await instance.get(`/player/assign/${roomId}`);

//UPDATE

export const AssignSins = async (roomId) => {
  const data = await instance.put(`player/assign/${roomId}`);
  return data.data;
};

//No se usa pero estaria bien que funcionara en vez de updatear con un post (createSin)
export const updateSin = async (playerId, { sin }) => {
  await instance.put(`player/${playerId}/sin`, { sin });
};

//DELETE

export const deletePlayer = async (playerId) =>
  await instance.delete(`player/${playerId}`);

export const deleteSin = async (playerId) =>
  await instance.delete(`player/${playerId}/sin`);

export const deletePunish = async (playerId) =>
  await instance.delete(`player/${playerId}/punish`);
