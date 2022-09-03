import React from 'react'
import Link from 'next/link'

function header() {
  return (
    <div className=' zzz max-w-7xl mx-auto font-bold'>
    <div className="flex flex-col sm:block">
    <p className='text-center float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-5 sm:mt-12 pb-4 sm:pb-0 border-white/20 sm:border-none border-b'><Link href="/">LB│FITNESS</Link></p>
    <div className="flex flex-row sm:block">
    <Link className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/api/auth/logout">Logout</Link>
    <Link className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/">Workouts</Link>
    </div> </div></div>
  )
}

export default header