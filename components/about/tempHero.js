import React from "react";

function tempHero() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-36 sm:mt-28 md:pt-20">
        <div className="hidden md:flex justify-center">
          <hr className="w-1/12 mt-3" /> <p className="pl-3 pr-3">About Us</p><hr className="w-1/12 mt-3" />
        </div>
        <div className=" flex justify-center items-center">
        <div className="">
        <h1 className="!leading-tight text-white text-center mt-7 sm:mt-0 text-4xl xsm:text-5xl sm:text-4xl md:6xl md-lg:text-5xl lg:text-7xl font-bold stroke-removal">
          WE HELP YOU ACHIEVE{" "}
          <span className="stroke-title">
            <br />
            YOUR GOALS.{" "}
          </span>
        </h1>
        <div className="mt-4 flex justify-center">
          <a className="text-center text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer">
            Explore
          </a>
        </div></div></div>
        <div class="mouse_scroll pt-20 md:pt-20">

		<div class="mouse">
			<div class="wheel"></div>
		</div>
		<div>
			<span class="m_scroll_arrows unu"></span>
			<span class="m_scroll_arrows doi"></span>
			<span class="m_scroll_arrows trei"></span>
		</div>
</div>
      </div>
      <img className="absolute top-0" src="https://res.cloudinary.com/dckwf6med/image/upload/v1661523827/Web%20Dev%20Projects/Ellipse-100-_1__jahl4k.webp"/>
    </>
  );
}

export default tempHero;
