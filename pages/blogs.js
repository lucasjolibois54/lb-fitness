import React from 'react'
import HomeHeader from '../components/main/homeHeader';
import Hero from '../components/blogs/hero'
import FeaturedBlogs from '../components/blogs/featuredBlogs'
import Footer from '../components/main/footer';
import { useUser } from '@auth0/nextjs-auth0';

function blogs() {
  const { user, error, isLoading } = useUser();
  /*console.log(user)*/

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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