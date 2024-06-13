import axios from 'axios';

const useFilmsService = () => {
  const _URL = 'https://api.kinopoisk.dev/';

  type ConfigType = {
    limit: number;
    page: number;
    genre: string;
    year: string;
    rating: string;
  };

  const getAllFilms = async ({
    limit,
    page,
    genre,
    year,
    rating,
  }: ConfigType) => {
    const res = await axios.get(
      `${_URL}v1.3/movie?page=${page}&limit=${limit}&type=${genre}&year=${year}&rating.kp=${rating}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': '7CVMCY7-RDJ4X2B-GD4HNT8-DDW8ZSH',
        },
      }
    );

    return res.data;
  };

  return {
    getAllFilms,
  };
};

export default useFilmsService;
