import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'
/*
const HeaderAuth = () => { 
  return (
    <div className=' zzz max-w-7xl mx-auto font-bold'>
    <div className="flex flex-col sm:block">
    <p href="/" className='text-center float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-5 sm:mt-12 pb-4 sm:pb-0 border-white/20 sm:border-none border-b'><Link href="/">LB│FITNESS</Link></p>
    <div className="flex flex-row sm:block">
    <p className='float-right mx-7 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link  href="/api/auth/logout">Logout</Link></p>
    </div> </div></div>
  )
}


const Header = () => {      // variable with the component Header. () => means it's a function
  return (
    <div className=' zzz max-w-7xl mx-auto font-bold'>
    <div className="flex flex-col sm:block">
    <p href="/" className='text-center float-left text-2xl pt-2 sm:pt-0 sm:text-3xl mx-7 -mb-7 mt-5 sm:mt-12 pb-4 sm:pb-0 border-white/20 sm:border-none border-b'><Link href="/">LB│FITNESS</Link></p>
    <div className="flex flex-row sm:block">
    <p className='float-right mx-7 ml-0 -mb-7 mt-12 text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer'><Link  href="/api/auth/login">Login</Link></p>
    </div> </div></div>
  )
}
*//*

function homeHeader() {
  const { user, error, isLoading } = useUser();           */
  /*console.log(user)*/
/*
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

export default homeHeader*/




function homeHeader() {
       
  /*console.log(user)*/



   
    return (                   
      <>
<h2>nom</h2>
      
      </>
    );

}

export default homeHeader