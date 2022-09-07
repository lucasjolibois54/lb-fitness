import React from 'react'
import Link from 'next/link'

function hero() {
  return (
    <>
    <div className='max-w-7xl mx-auto sm:pl-7'>
        {/* <img className='sm:hidden absolute w-screen' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662303071/Web%20Dev%20Projects/Mask_group_13_1_kz9szg.webp' /> */}
        <div className='sm:flex sm:justify-between pt-36 sm:mt-10'>
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
        <p className=' md:text-lg sm:ml-7 max-w-lg px-5 sm:px-0 text-center sm:flex sm:justify-end mt-3 sm:mt-0 sm:text-left text-gray-subtext font-extralight'>Through this page, you will gain access to the diet plans. Every plan serves a different purpose. press on the i icon and see if it is something for you. We got everything, whether you are trying to gain more muscle mass, lose weight, or even if you are vegetarian. Every plan has a calorie calculator that you can use to see how much you should be eating on the specific plan.</p>  
        <Link href='#subHeroFood'><p className='md:text-lg sm:ml-7 max-w-lg px-5 sm:px-0 sm:flex sm:justify-start mt-3 sm:mt-0 sm:text-left transition duration-300 group transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer text-left text-pink text-sm font-extralight'>See more</p></Link>
        </div>

        </div>
        </div>
        <img className=' sm:block w-screen mt-20' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662316256/Web%20Dev%20Projects/Mask-group-_14_-_1__y7veny.webp'/>
    </>
  )
}

export default hero