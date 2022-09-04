import React from 'react'
import Hero from '../../components/meals/hero'
import HomeHeader from '../../components/main/homeHeader'

function meals() {
  return (
    <div className='h-screen'>
      <HomeHeader/>
      <Hero/>
    </div>
  )
}

export default meals