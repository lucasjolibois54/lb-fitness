import Link from 'next/link'
import React from 'react'

function nav() {
  return (
    <>
<div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
      <li><p className="menu__item" >Home</p></li>
      <li><p className="menu__item" >About</p></li>
      <li><p className="menu__item" >Team</p></li>
      <li><p className="menu__item" >Contact</p></li>
      <li><p className="menu__item" >Twitter</p></li>
    </ul>
  </div>
</>
  )
}

export default nav