import React from 'react'

function featuredBlogs() {
  return (
    <div className='my-16 max-w-7xl mx-auto px-6'>
        <h3 className='!leading-tight text-white text-center px-5 mt-28 sm:mt-20 text-4xl xsm:text-3xl sm:text-4xl md:4xl md-lg:text-4xl lg:text-4xl font-bold stroke-removal'>
            FEATURED BLOGS
        </h3>



        <div className='mt-12 w-screen flex flex-row space-x-8'>
            <img className='w-3/12' src='https://res.cloudinary.com/dckwf6med/image/upload/v1661808957/Web%20Dev%20Projects/image_61_1_k3629a.webp'/>
            <img className='w-7/12 pr-6' src='https://res.cloudinary.com/dckwf6med/image/upload/v1661808920/Web%20Dev%20Projects/image_62_1_tbz8z1.webp'/>
        </div>
       
       
        <div className="mt-10 pt-5 flex justify-center">
          <a href="/allBlogs" className="text-center text-pink py-3 px-12 rounded-full border-gray-stroke border-2 cursor-pointer">
            View All
          </a>
        </div>
    </div>
  )
}

export default featuredBlogs