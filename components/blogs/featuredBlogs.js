import React from 'react'
import Link from 'next/link'

function featuredBlogs() {
  return (
    <div className='my-16 max-w-7xl mx-auto px-6'>
 <h3 className='!leading-tight mb-10 text-off-white text-center px-5 mt-10 sm:mt-20 text-4xl xsm:text-3xl sm:text-4xl md:4xl md-lg:text-4xl lg:text-4xl font-bold stroke-removal'>
            FEATURED BLOGS
        </h3>


<div className="mx-auto">
  <div className="grid sm:grid-cols-3 gap-2 sm:grid-flow-row grid-">
    <div className="p-5 sm:p-2 text-center bg-transparent sm:col-start-1 sm:col-end-2">
    <Link href='/articles/benefitsOfHIIT'><img alt="Image" className='transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl w-full cursor-pointer' src='https://res.cloudinary.com/dckwf6med/image/upload/v1661808957/Web%20Dev%20Projects/image_61_1_k3629a.webp'/></Link>
    <p className='mt-5 text-left text-gray-300 text-lg px-2 font-extralight'>Why incorporate HIIT to your training</p>
    <p className='mt-0 text-left text-gray-subtext text-sm px-2 font-extralight'>HIIT training is a perfect way not only to burn calories, but also to burn fat. After your workout, all of that intense ...</p>
    <Link href='/articles/benefitsOfHIIT'><p className='transition duration-300 group transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer mt-2 text-left text-pink text-sm px-2 font-extralight'>Read more</p></Link>
    </div>

    <div className="p-5 sm:p-2 text-center bg-transparent  sm:col-start-2 sm:col-end-4">
    <Link href='/articles/boostYourTestosteroneNaturally'><img alt="Image" className='transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl w-full cursor-pointer hidden sm:block' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662213064/Web%20Dev%20Projects/Mask_group_7_1_da5tie.webp'/></Link>
    <Link href='/articles/boostYourTestosteroneNaturally'><img alt="Image" className='transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl w-full cursor-pointer sm:hidden' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662213126/Web%20Dev%20Projects/Mask_group_8_1_e0c1mp.webp'/></Link>
    <p className='mt-5 text-left text-gray-300 text-lg px-2 font-extralight'>How to boost testosterone naturally</p>
    <p className='mt-0 text-left text-gray-subtext text-sm px-2 font-extralight'>Testosterone is oftenly associated sex drive and sperm quality, but also affects your bones, muscle mass, fat storage in the human body, and even red blood cell production...</p>
    <Link href='/articles/boostYourTestosteroneNaturally'><p className='transition duration-300 group transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer mt-2 text-left text-pink text-sm px-2 font-extralight'>Read more</p></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default featuredBlogs