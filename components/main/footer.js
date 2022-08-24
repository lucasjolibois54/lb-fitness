import React from 'react'

function footer() {
  return (
    <div className='mt-20 mb-20  max-w-7xl  mx-auto flex items-center justify-center space-x-14 border-white/20 border-t'>
        
        <div className='w-3/12'>
        <p className='text-sm pt-10 text-gray-200 '>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
        <div className='flex space-x-2 mt-3'>
        <p>TW</p><p>IG</p><p>YT</p></div></div>
        <div className='w-2/12 space-y-4'>

            <p className='mt-6 text-gray-200 hover:text-pink cursor-pointer font-light ml-3'>
                Home
            </p>
            <p className=' text-gray-200 font-light ml-3'>
                Contact us
            </p>
            <p className=' text-gray-200 font-light ml-3'>
                Login &amp; Signup
            </p>
        </div>

        <div className='w-2/12 space-y-4'>

            <p className='mt-6 text-gray-200 font-light ml-3'>
                paragraph
            </p>
            <p className=' text-gray-200 font-light ml-3'>
                paragraph
            </p>
            <p className=' text-gray-200 font-light ml-3'>
                paragraph
            </p>
        </div>

        <div className='w-2/12 space-y-4'>

            <p className='mt-6 text-gray-200 font-light ml-3'>
                paragraph
            </p>
            <p className=' text-gray-200 font-light ml-3'>
                paragraph
            </p>
            <p className=' text-gray-200 font-light ml-3'>
                paragraph
            </p>
        </div>
    </div>
  )
}

export default footer