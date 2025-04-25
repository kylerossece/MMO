/* eslint-disable consistent-return */
import axios from 'axios';


export const getGames  = async () => {
  try {
    const { data } = await axios.get(`https://mmo-games.p.rapidapi.com/games `, {
      params: {

      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_GAMES_API_KEY,
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
  
};

