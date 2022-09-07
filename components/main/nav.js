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
      <li><p className="menu__item" ><Link className=" cursor-pointer" href="/">Home</Link></p></li>
      <li><p className="menu__item" ><Link className=" cursor-pointer" href="/about">About us</Link></p></li>
      <li><p className="menu__item" ><Link className=" cursor-pointer" href="/api/auth/login">Login &amp; Signup</Link></p></li>
      <li><p className="menu__item" ><Link className="cursor-pointer" href="/membersonly/introduction">Introduction</Link></p></li>
      <li><p className="menu__item" ><Link className=" cursor-pointer" href="/api/auth/login">Plan Overview</Link></p></li>
      <li><p className="menu__item" ><Link className=" cursor-pointer" href="/blogs">Blog Overview</Link></p></li>
      <li><p className="menu__item" ><Link className=" cursor-pointer" href="/about/#faq-section">FAQ&apos;S</Link></p></li>
      <li><p className="menu__item" ><Link className=" cursor-pointer" href="/membersonly/meals">Meal Plans</Link></p></li>

    </ul>
  </div>
</>
  )
}

export default nav