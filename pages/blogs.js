import React from 'react'
import HeaderAfterLogin from '../components/main/headerAfterLogin'
import Hero from '../components/blogs/hero'
import FeaturedBlogs from '../components/blogs/featuredBlogs'

function blogs() {
  return (
    <div className='h-screen'>
      <HeaderAfterLogin/>
      <Hero/>
      <FeaturedBlogs/>
    </div>
  )
}

export default blogs