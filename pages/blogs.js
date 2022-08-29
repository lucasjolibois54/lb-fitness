import React from 'react'
import HeaderAfterLogin from '../components/main/headerAfterLogin'
import Hero from '../components/blogs/hero'
import FeaturedBlogs from '../components/blogs/featuredBlogs'
import Footer from '../components/main/footer';

function blogs() {
  return (
    <div className='h-screen'>
      <HeaderAfterLogin/>
      <Hero/>
      <FeaturedBlogs/>
      <Footer/>
    </div>
  )
}

export default blogs