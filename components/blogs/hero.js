import React from 'react'

function hero() {
  return (
    <>
    <div className='max-w-7xl mx-auto'>
        <h1 className='!leading-tight text-white text-left px-5 mt-28 sm:mt-28 2xl:mt-36 text-5xl xsm:text-3xl sm:text-4xl md:6xl md-lg:text-4xl lg:text-5xl font-bold stroke-removal'>
        READ OUR FITNESS, NUTRITION <br/>
AND LIFESTYLE BLOGS
        </h1>
        <a href='/articles/benefitsOfHIIT'><img className='mt-7 px-5' src='https://res.cloudinary.com/dckwf6med/image/upload/v1661807512/Web%20Dev%20Projects/image_60_1_vx4bfn.webp'/></a>
        <p className='mt-5 px-5 sm:w-2/3 font-extralight'>HIIT training is a perfect way not only to burn calories, but also to burn fat. After your workout, all of that intense exertion kicks your body's repair cycle into hyperdrive. This means that your body will ...</p>
        <hr className='mt-7 sm:mt-9 px-5'/>
    </div>
    </>
  )
}

export default hero