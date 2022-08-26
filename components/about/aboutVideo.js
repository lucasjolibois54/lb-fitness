import React from "react";

function aboutVideo() {
  return (
    <div>
      <h2 className=" !leading-tight sm:pb-5 text-white text-center mt-48 pt-20  text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-6xl font-bold stroke-removal">
      LEARN MORE ABOUT{" "}
        <span className="stroke-title text-5xl xsm:text-4xl sm:text-5xl md-lg:text-6xl lg:text-6xl">
          <br />
          LB FITNESS{" "}
        </span>
      </h2>
      <div className=" pl-5 pr-5 mt-10 flex justify-center items-center">
        <video
          className="max-w-5xl rounded-lg"
          poster={
            "https://res.cloudinary.com/dckwf6med/image/upload/v1661542929/Web%20Dev%20Projects/Sk%C3%A6rmbillede-2022-08-26-kl.-21.40.56_d7fbae.webp"
          }
          width="100%"
          src="https://res.cloudinary.com/dckwf6med/video/upload/v1661542030/Web%20Dev%20Projects/About_Us-_LB_Fitness_1_yqqh70.mp4"
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

export default aboutVideo;
