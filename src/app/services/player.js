import instance from './api';

// CREATE 
export const createPlayer = async (obj) => await instance.post('player/', obj);
