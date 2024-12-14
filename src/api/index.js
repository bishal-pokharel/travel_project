// src/api/index.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://apiecoheartadv.xyz.elyakadventures.com', // Ensure baseURL is correct
  // baseURL: 'http://192.168.5.192:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetcher = async (url) => {
  const response = await apiClient.get(url);
//   console.log("Full Axios Response:", response); // Debugging the full response
  // Return only the data
  return response.data;
};

export const poster = async (url, data) => {
  const response = await apiClient.post(url, data);
   return response.data;
}


