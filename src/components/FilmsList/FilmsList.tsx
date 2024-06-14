import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';

import useFilmsService from '../../services/filmsService';
import { IFilm } from '../../type';

import './filmsList.scss';

const FilmsList = memo(() => {
  const [filmsList, setFilmsList] = useState([]);

  const { getAllFilms } = useFilmsService();

  useEffect(() => {
    const handleGettingFilms = async () => {
      const filmsList = await getAllFilms({
        limit: 50,
        page: 1,
        genre: 'cartoon',
        year: '1990-2024',
        rating: '7-8.9',
      });
      setFilmsList(filmsList.docs);
    };

    console.log(filmsList);

    handleGettingFilms();
  }, []);

  function renderItems(arr: IFilm[]) {
    const items = arr.map((item) => {
      return (
        <li className='films__item' key={item.id}>
          <Link to={`/films/${item.id}`}>
            <img src={item.poster.url} alt={item.name} className='films__item-img' />
            <div className='films__item-name'>{item.name}</div>
            <div className='films__item-year'>{item.year}</div>
            <div className='films__item-price'>{item.rating.kp}</div>
          </Link>
        </li>
      );
    });
    return <ul className='films__grid'>{items}</ul>;
  }

  const items = renderItems(filmsList);

  // const errorMessage = err ? <ErrorMessage /> : null;
  // const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className='char__list'>
      {/* {errorMessage}
      {spinner} */}
      {items}
    </div>
  );
});

export default FilmsList;
