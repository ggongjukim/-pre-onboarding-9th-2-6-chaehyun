import { apiClient } from './apiClient';

export const getContents = async () => {
  const result = await apiClient.get('/content');
  return result.data;
};

// reservations
export const createReservations = async (_id) => {
  const result = await apiClient.post('/reservations', { id: _id });
  return result;
};
