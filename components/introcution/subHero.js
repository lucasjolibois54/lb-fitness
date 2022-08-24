import React from "react";

function subHero() {
  return (
    <div>
      <h2 className="sm:pb-5 text-white text-center mt-10 pt-10 sm:mt-0 text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl font-bold stroke-title">
        INTRODUCTION{" "}
        <span className="stroke-removal text-5xl xsm:text-4xl sm:text-5xl md-lg:text-6xl lg:text-6xl">
          <br />
          TO THE PLATFORM{" "}
        </span>
      </h2>
      <p className="text-base text-center px-5 md:text-lg max-w-2xl mx-auto text-gray-400 mt-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters.
      </p>
      <div className="mt-7 text-center">
        <a className="text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer" href="/">
        Skip introduction
        </a>
      </div>
    </div>
  );
}

export default subHero;
