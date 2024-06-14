import AppBanner from '../../components/AppBanner/AppBanner';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import FilmsList from '../../components/FilmsList/FilmsList';
import LeftBar from '../../components/LeftBar/LeftBar';
import CustomPagination from '../../components/Pagination/Pagination';

import './mainPage.sass';

const MainPage = () => {
  return (
    <div className='page__container'>
      <AppBanner />
      <LeftBar />
      <div className='page__wrapper'>
        <h1 className='page__title'>
          <span>KINO BOOM </span>information portal
        </h1>
        <ErrorBoundary>
          <FilmsList />
        </ErrorBoundary>
        <div className='page__pagination'>
          <CustomPagination />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
