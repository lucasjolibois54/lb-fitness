

function homeHeader() {
  return (
    <div className='max-w-7xl mx-auto font-bold'>
      <p href="/" className='float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-12'><a href="/">LB│FITNESS</a></p>
      <a className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer' href="/api/auth/login">Login</a>
      </div>
  )
}

export default homeHeader