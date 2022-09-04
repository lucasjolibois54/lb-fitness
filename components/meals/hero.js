import React from 'react'

function hero() {
  return (
    <div className='max-w-7xl mx-auto'>
        <img className='hidden sm:block absolute h-5/6 top-0 right-0' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662301819/Web%20Dev%20Projects/Vector_1_1_2_zvwdoy.webp' />
        <img className='absolute w-screen' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662303071/Web%20Dev%20Projects/Mask_group_13_1_kz9szg.webp' />
        <h1 className=" sm:hidden pt-36 text-white text-center sm:text-left relative sm:mt-40 text-5xl xsm:text-6xl sm:text-4xl md:6xl md-lg:text-5xl lg:text-8xl font-bold stroke-removal">
        READY TO{" "}
          <span className="stroke-title">
            <br />
            EAT YOUR {" "}
            <br />
            WAY TO FIT {" "}
          </span>
        </h1>
    </div>
  )
}

export default hero