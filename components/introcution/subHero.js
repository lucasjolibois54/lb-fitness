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
        Welcome to our platform. Watch the video below to learn more about how
        the LB Fitness platform works, how to plans are structured, as well as
        our future plans for the platform. This is only the beginning.
      </p>
      <div className="mt-7 text-center">
        <a
          className="text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer"
          href="/"
        >
          Skip introduction
        </a>
      </div>
      <div className=" pl-5 pr-5 mt-20 flex justify-center items-center">
        <video
          className="max-w-5xl rounded-lg"
          poster={
            "https://res.cloudinary.com/dckwf6med/image/upload/v1661442252/Web%20Dev%20Projects/Sk%C3%A6rmbillede_2022-08-25_kl._17.43.36_dmtb6q.webp"
          }
          width="100%"
          src="https://res.cloudinary.com/dckwf6med/video/upload/v1661441489/Web%20Dev%20Projects/Introduction_to_LB_Fitness_1_plbesh.mp4"
          controls
          css={`
            height: 95vh;
            width: 80vw;
          `}
        >
          Your browser does not support the video tag.
        </video>{" "}
      </div>
    </div>
  );
}

export default subHero;
