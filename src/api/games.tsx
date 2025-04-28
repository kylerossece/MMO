import axios from 'axios';

export const getGames = async (gameId : number | null) => {
  try {
    const baseUrl = 'https://mmo-games.p.rapidapi.com';
    
    const params: { id?: number } = {};

    if (gameId) {
      params.id = gameId;
    }

    const url = gameId ? `${baseUrl}/game` : `${baseUrl}/games`;

    gameId ? params.id : ''

    const { data } = await axios.get(url, {
      params,
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_GAMES_API_KEY,
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    alert(error)
    console.error(error);
  }
};
