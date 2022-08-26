import React from "react";

function hero() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-36 sm:mt-28">
        <div className="hidden md:flex justify-center sm:justify-start">
          <hr className="w-1/12 mt-3" /> <p className="pl-3">About Us</p>
        </div>
        <div className=" flex justify-center items-center md:block">
        <div className="md:float-left md:text-right">
        <h1 className="!leading-tight text-white text-center md:text-right mt-7 sm:mt-0 text-5xl xsm:text-5xl sm:text-4xl md:6xl md-lg:text-5xl lg:text-6xl font-bold stroke-removal">
          WE HELP YOU ACHIEVE{" "}
          <span className="stroke-title">
            <br />
            YOUR GOALS.{" "}
          </span>
        </h1>
        <div className="mt-4 flex justify-center md:justify-end">
          <a className="text-center text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer">
            Explore
          </a>
        </div></div></div>
        <div class="mouse_scroll pt-20 md:pt-80">

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
    </>
  );
}

export default hero;
