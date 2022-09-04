import React from 'react'
import Hero from '../../components/meals/hero'
import HomeHeader from '../../components/main/homeHeader'
import SubHero from '../../components/meals/subHero'
import Footer from '../../components/main/footer'

function meals() {
  return (
    <div className='h-screen'>
      <HomeHeader/>
      <Hero/>
      <SubHero/>
      <Footer/>
    </div>
  )
}

export default meals