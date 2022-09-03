import React from 'react'

function featuredBlogs() {
  return (
    <div className='my-16 max-w-7xl mx-auto px-6'>
 <h3 className='!leading-tight mb-10 text-off-white text-center px-5 mt-28 sm:mt-20 text-4xl xsm:text-3xl sm:text-4xl md:4xl md-lg:text-4xl lg:text-4xl font-bold stroke-removal'>
            FEATURED BLOGS
        </h3>


<div className="mx-auto">
  <div className="grid sm:grid-cols-3 gap-2 sm:grid-flow-row grid-">
    <div className="p-5 sm:p-2 text-center bg-transparent sm:col-start-1 sm:col-end-2">
    <img className='w-full' src='https://res.cloudinary.com/dckwf6med/image/upload/v1661808957/Web%20Dev%20Projects/image_61_1_k3629a.webp'/>
    <p className='mt-5 text-left text-gray-subtext text-sm px-2 font-extralight'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.</p>
    <p className='mt-2 text-left text-pink text-sm px-2 font-extralight'>Read more</p>
    </div>

    <div className="p-5 sm:p-2 text-center bg-transparent  sm:col-start-2 sm:col-end-4">
    <img className='w-full hidden sm:block' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662213064/Web%20Dev%20Projects/Mask_group_7_1_da5tie.webp'/>
    <img className='w-full  sm:hidden' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662213126/Web%20Dev%20Projects/Mask_group_8_1_e0c1mp.webp'/>
    <p className='mt-5 text-left text-gray-subtext text-sm px-2 font-extralight'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
    <p className='mt-2 text-left text-pink text-sm px-2 font-extralight'>Read more</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default featuredBlogs