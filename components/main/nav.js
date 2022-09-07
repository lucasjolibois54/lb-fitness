import Link from 'next/link'
import React from 'react'

function nav() {
  return (
    <>
<div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">

        {/* phone */}
      <div className='text-left sm:text-center mt-10 ml-7 space-y-5 sm:space-y-0 sm:hidden'>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/">Home</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/api/auth/login">Login &amp; Signup</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className="cursor-pointer" href="/membersonly/introduction">Introduction</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/about">About us</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/api/auth/login">Plan Overview</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/blogs">Blog Overview</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/about/#faq-section">FAQ&apos;S</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/membersonly/meals">Meal Plans</Link></p></li>
      </div>

      {/* pc */}
      <div className='text-left sm:text-center mt-10 ml-7 space-y-5 sm:space-y-0 hidden sm:block'>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/">Home</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/api/auth/login">Login &amp; Signup</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className="cursor-pointer" href="/membersonly/introduction">Introduction</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/about">About us</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/api/auth/login">Plan Overview</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/blogs">Blog Overview</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/about/#faq-section">FAQ&apos;S</Link></p></li>
      <li><p className="navhover transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 !leading-tight sm:pb-5 text-white text-3xl xsm:text-4xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold " ><Link className=" cursor-pointer" href="/membersonly/meals">Meal Plans</Link></p></li>
      </div>
    </ul>
  </div>
</>
  )
}

export default nav