import HomeHeader from '../components/main/homeHeader';
import Nav from '../components/main/nav';
import Hero from '../components/about/hero';
import TempHero from '../components/about/tempHero';
import AboutUs from '../components/about/aboutUs';
import PromoVideo from '../components/about/promoVideo';
import SubPromoVideo from '../components/about/subPromoVideo';
import Faq from '../components/about/faq';
import OnInstagram from '../components/about/onInstagram';
import Footer from '../components/main/footer';
import AboutVideo from '../components/about/aboutVideo';

function about() {
  return (
    <div className=''>
        <Nav/>
        <HomeHeader/>
        <TempHero/>
        <AboutVideo/>
        <AboutUs/>
        <PromoVideo/>
        <SubPromoVideo/>
        <Faq/>
        <OnInstagram/>
        <Footer/>
    </div>
  )
}

export default about