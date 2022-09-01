import React from 'react'

function featuredBlogs() {
  return (
    <div className='my-16 max-w-7xl mx-auto px-6'>
 <h3 className='!leading-tight mb-10 text-white text-center px-5 mt-28 sm:mt-20 text-4xl xsm:text-3xl sm:text-4xl md:4xl md-lg:text-4xl lg:text-4xl font-bold stroke-removal'>
            FEATURED BLOGS
        </h3>


<div className="mx-auto">
  <div className="grid grid-cols-3 gap-2 grid-flow-row grid-">
    <div className="p-5 text-center bg-transparent col-start-1 col-end-2">
    <img className='w-full' src='https://res.cloudinary.com/dckwf6med/image/upload/v1661808957/Web%20Dev%20Projects/image_61_1_k3629a.webp'/>
    </div>

    <div className="p-5 text-center bg-transparent col-start-2 col-end-4">
    <img className='w-full pr-6' src='https://res.cloudinary.com/dckwf6med/image/upload/v1661808920/Web%20Dev%20Projects/image_62_1_tbz8z1.webp'/>
    </div>
    {/* <div className="p-5 text-center bg-white">C</div>
    <div className="p-5 text-center bg-white">D</div>
    <div className="p-5 text-center bg-white">E</div> */}
  </div>
</div>
    </div>
  )
}

export default featuredBlogs