import HomeHeader from '../components/main/homeHeader';
import Hero from '../components/about/hero';

import TempHero from '../components/about/tempHero';

function about() {
  return (
    <div className='h-screen'>
        <HomeHeader/>
        <TempHero/>
    </div>
  )
}

export default about