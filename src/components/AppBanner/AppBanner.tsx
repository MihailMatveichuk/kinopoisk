import avengers from '../../../public/img/Avengers.png';
import avengersLogo from '../../../public/img/Avengers_logo.png';

import './appBanner.scss';

const AppBanner = () => {
  return (
    <div className='app__banner'>
      <div className='app__banner_wrapper'>
        <img src={avengers} alt='Avengers' />
        <div className='app__banner_wrapper-text'>New Films every week! Stay tuned!</div>
        <img src={avengersLogo} alt='Avengers logo' />
      </div>
    </div>
  );
};

export default AppBanner;
