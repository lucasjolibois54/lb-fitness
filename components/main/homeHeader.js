import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'
import Nav from "./Nav"

const HeaderAuth = () => { 
  return (
    /*<div className='zzzz max-w-7xl mx-auto font-bold'>
    <div className="flex flex-col sm:block">
    <p href="/" className='text-center float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-5 sm:mt-12 pb-4 sm:pb-0 border-white/20 sm:border-none border-b'><Link href="/">LB│FITNESS</Link></p>
    <div className="flex flex-row sm:block">
    <p className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link  href="/api/auth/logout">Logout</Link></p>
    <Nav className='float-right mx-26 ml-0 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer'/>
    </div> </div></div>*/
    <div className=' zzz zzzz max-w-7xl mx-auto font-bold border-white/20 sm:border-none border-b'>
    <div className="block">
    <p href="/" className='z-50 text-center float-left text-lg xsm:text-xl semixsm:text-2xl mx-7 sm:mr-20  -mb-7 mt-7 sm:mt-12 semixsm:ml-5 ml-4  sm:text-3xl  pb-4 sm:pb-0'><Link href="/">LB│FITNESS</Link></p>
    <div className="block">
    <p className='z-50 float-right mx-7 ml-0 mr-16 sm:text-lg text-sm semixsm:text-md semixsm:mr-16 sm:mr-20 -mb-7 mt-5 sm:mt-12 text-pink py-2 px-5 xxsm:px-10 semixsm:px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link  href="/api/auth/logout">Logout</Link></p>
    <Nav/>
    </div> </div></div>
  )
}


const Header = () => {      // variable with the component Header. () => means it's a function
  return (
   /* <div className=' zzz max-w-7xl mx-auto font-bold'>
    <div className="flex flex-col sm:block">
    <p href="/" className='z-50 text-center float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-5 sm:mt-12 pb-4 sm:pb-0 border-white/20 sm:border-none border-b'><Link href="/">LB│FITNESS</Link></p>
    <div className="flex flex-row sm:block">
    <p className='z-50 float-right mx-7 ml-0 mr-20 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link  href="/api/auth/login">Login</Link></p>
    <Nav className=''/>
    </div> </div></div>*/

    <div className=' zzz zzzz max-w-7xl mx-auto font-bold border-white/20 sm:border-none border-b'>
    <div className="block">
    <p href="/" className='z-50 text-center float-left text-xl xsm:text-xl semixsm:text-2xl semixsm:mx-7 sm:mr-20  -mb-7 mt-6 sm:mt-12 semixsm:ml-5 ml-4  sm:text-3xl  pb-4 sm:pb-0'><Link href="/">LB│FITNESS</Link></p>
    <div className="block">
    <p className='z-50 float-right mx-7 ml-0 mr-16 sm:text-lg text-sm semixsm:text-md semixsm:mr-16 sm:mr-20 -mb-7 mt-5 sm:mt-12 text-pink py-2 px-5 xxsm:px-10 semixsm:px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link  href="/api/auth/login">Login</Link></p>
    <Nav/>
    </div> </div></div>
  )
}


function HomeHeader() {
  const { user, error, isLoading } = useUser();           
  /*console.log(user)*/

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

   
    return (                    //if auth is true, return <HeaderAuth/> else return <Header/>
      <>
      {user ? (                 // ? is the same as if
        <HeaderAuth/>
      ) : (                     // : is the same as else
      <Header/>
      )}
      
      </>
    );

}

export default HomeHeader
