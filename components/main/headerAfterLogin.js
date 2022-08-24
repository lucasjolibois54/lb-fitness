

function headerAfterLogin() {
    return (
      <div className=' zzz max-w-7xl mx-auto font-bold'>
        <p className='float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-12'>LB│FITNESS</p>
        <a className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/api/auth/logout">Logout</a>
        <a className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/api/auth/logout">See Intro</a>
        </div>
    )
  }
  
  export default headerAfterLogin