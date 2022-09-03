import React from 'react'
import HomeHeader from '../components/main/homeHeader';
import Hero from '../components/blogs/hero'
import FeaturedBlogs from '../components/blogs/featuredBlogs'
import Footer from '../components/main/footer';

function blogs() {
  return (
    <div className='h-screen'>
      <HomeHeader/>
      <Hero/>
      <FeaturedBlogs/>
      <Footer/>
    </div>
  )
}

export default blogs