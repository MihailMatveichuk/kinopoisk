import { useEffect } from 'react';
// import RandomCFilm from '../components/randomChar/RandomChar';
// import FilmList from '../components/charList/CharList';
// import FilmInfo from '../components/charInfo/CharInfo';
// import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import { useState } from 'react';
import useFilmsService from '../../services/filmsService';

const MainPage = () => {
  const [films, setFilms] = useState([]);
  const { getAllFilms } = useFilmsService();

  //   const onCharSelected = (id: string) => {
  //     setSelectedChar(id);
  //   };

  useEffect(() => {
    const handlegettingFilms = async () => {
      const films = await getAllFilms({
        limit: 50,
        page: 1,
        genre: 'films',
        year: '1990-2024',
        rating: '7-8.9',
      });
      setFilms(films);
    };

    handlegettingFilms();
  }, [getAllFilms]);

  console.log(films);

  return (
    <div>
      {films}
      {/* <ErrorBoundary>
        <RandomCFilm />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <FilmList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FilmInfo charId={selectedChar} />
        </ErrorBoundary>
      </div> */}
    </div>
  );
};

export default MainPage;
