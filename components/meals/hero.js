import React from 'react'

function hero() {
  return (
    <>
    <div className='max-w-7xl mx-auto sm:pl-7'>
        <img className='sm:hidden absolute w-screen' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662303071/Web%20Dev%20Projects/Mask_group_13_1_kz9szg.webp' />
        <div className='sm:flex sm:justify-between pt-24 sm:mt-10'>
        <h1 className=" text-white text-center sm:text-left relative text-5xl xsm:text-6xl sm:text-4xl md:6xl md-lg:text-5xl lg:text-7xl font-bold stroke-title">
        READY TO{" "}
          <span className="stroke-removal">
            <br />
            EAT YOUR {" "}</span>
            <span className="stroke-title">
            <br />
            WAY TO FIT {" "}
          </span>
        </h1>
<div className="my-auto">
        <p className=' md:text-lg sm:ml-7 max-w-lg flex justify-end mt-3 sm:mt-0 text-left text-gray-subtext font-extralight'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>  
        </div>

        </div>
        </div>
        <img className='hidden sm:block w-screen mt-20' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662316256/Web%20Dev%20Projects/Mask-group-_14_-_1__y7veny.webp'/>
    </>
  )
}

export default hero