export interface IFilm {
  id: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  name: string;
  year: string;
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  description: string;
  genres: [
    {
      name: string;
    }
  ];
}
