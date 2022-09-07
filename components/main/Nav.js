import Link from 'next/link'
import React from 'react'

import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';


const BurgerHeaderAuth = () => { 
  return (
    <>
<div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">

    <div className="sm:flex sm:h-screen">
  <div className="sm:m-auto">
      <div className='text-left sm:text-center mt-7 sm:-mt-36 ml-7 space-y-5 sm:space-y-0'>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/">Plan Overview</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/blogs">Blog Overview</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/about">About us</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/api/auth/logout">Logout</Link></p></li>
      </div></div></div>
    </ul>
  </div>
</>
  )
}


const BurgerHeader = () => {      // variable with the component Header. () => means it's a function
  return (
    <>
<div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
      <div className='text-left sm:text-center mt-10 ml-7 space-y-5 sm:space-y-0'>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/">Home</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/about">About us</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/api/auth/login">Plan Overview</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/blogs">Blog Overview</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/api/auth/login">Login &amp; Signup</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/about/#faq-section">FAQ&apos;S</Link></p></li>
      </div>
    </ul>
  </div>
</>
  )
}


function Nav() {
    const { user, error, isLoading } = useUser();   

    return (                    //if auth is true, return <HeaderAuth/> else return <Header/>
      <>
      {user ? (                 // ? is the same as if
        <BurgerHeaderAuth/>
      ) : (                     // : is the same as else
      <BurgerHeader/>
      )}
      
      </>
    );

}

export default Nav