import React from 'react'
import Hero from '../../components/meals/hero'
import HomeHeader from '../../components/main/homeHeader'
import SubHero from '../../components/meals/subHero'
import Footer from '../../components/main/footer'

function meals() {
  return (
    <div className='h-screen'>
      <HomeHeader/>
      {/* <Hero/>
      <SubHero/> */}
      <img className='max-w-7xl mx-auto mt-20 w-screen h-screen rounded-xl' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662587781/Web%20Dev%20Projects/9932f1_c33450aa552f4a64b2b679b4df61cfbd_mv2_wpgtux.gif'/>
      <Footer/>
    </div>
  )
}

export default meals