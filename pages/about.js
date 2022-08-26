import HomeHeader from '../components/main/homeHeader';
import Hero from '../components/about/hero';
import TempHero from '../components/about/tempHero';
import AboutUs from '../components/about/aboutUs';
import PromoVideo from '../components/about/promoVideo';
import SubPromoVideo from '../components/about/subPromoVideo';

function about() {
  return (
    <div className=''>
        <HomeHeader/>
        <TempHero/>
        <AboutUs/>
        <PromoVideo/>
        <SubPromoVideo/>
    </div>
  )
}

export default about