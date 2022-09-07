import Link from 'next/link'
import Nav from "./Nav"

function headerAfterLogin() {
    return (
     /* <div className=' zzz max-w-7xl mx-auto font-bold'>
        <div className="flex flex-col sm:block">
        <p href="/" className='text-center float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-5 sm:mt-12 pb-4 sm:pb-0 border-white/20 sm:border-none border-b'><Link href="/">LB│FITNESS</Link></p>
        <div className="flex flex-row sm:block">
        <p className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link href="/api/auth/logout">Logout</Link></p>
        <p className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link href="/membersonly/introduction">See Intro</Link></p>
        </div> </div></div>*/
        <div className=' zzz zzzz max-w-7xl mx-auto font-bold border-white/20 sm:border-none border-b'>
        <div className="block">
        <p href="/" className='z-50 text-center float-left text-2xl mx-7 sm:mr-20 -mb-7 mt-7 sm:mt-12 ml-5  sm:text-3xl  pb-4 sm:pb-0'><Link href="/">LB│FITNESS</Link></p>
        <div className="block">
        <p className='z-50 float-right mx-7 ml-0 mr-16 sm:mr-20 -mb-7 mt-5 sm:mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link  href="/api/auth/logout">Logout</Link></p>
        <Nav/>
        </div> </div></div>
    )
  }
  
  export default headerAfterLogin