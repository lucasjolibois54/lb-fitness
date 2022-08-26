

function homeHeader() {
  return (

    <div className=' zzz max-w-7xl mx-auto font-bold'>
    <div className="flex flex-col sm:block">
    <p href="/" className='text-center float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-5 sm:mt-12 pb-4 sm:pb-0 border-white/20 sm:border-none border-b'><a href="/">LB│FITNESS</a></p>
    <div className="flex flex-row sm:block">
    <a className='float-right mx-7 ml-0 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/api/auth/login">Login</a>
    {/* <a className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/about">About</a> */}
    </div> </div></div>

    /*
    <div className='max-w-7xl mx-auto font-bold'>
      <p href="/" className='float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-12'><a href="/">LB│FITNESS</a></p>
      <a className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/api/auth/login">Login</a>
      </div>*/
  )
}

export default homeHeader