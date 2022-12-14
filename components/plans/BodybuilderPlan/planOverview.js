import React from "react";
import Link from "next/link";

function planOverview() {
  return (
    <>
      <div className="mt-20 mb-20  max-w-7xl  mx-auto flex flex-col sm:flex-row items-center justify-center sm:space-x-14">
        <div className="w-4/6 sm:w-3/12 space-y-4">
          
         <Link href="/membersonly/bodybuilderPlan"><div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
            alt="Image" className="planimg"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1661359671/Web%20Dev%20Projects/Group_78_1_dlxnfg.webp"
          />
          <p className="plantitle text-center">Ultimate bodybuilding plan</p></div></Link>
        </div>

        <div className="w-4/6 sm:w-3/12 space-y-4">
        <div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
             alt="Image" className="planimg"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1661359795/Web%20Dev%20Projects/Group_79_1_vid11c.webp"
          />
          <p className="plantitle text-center">Ultimate homeworkout plan</p>{" "}</div>
        </div>

        <div className="w-4/6 sm:w-3/12 space-y-4">
        <div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
            alt="Image" className="planimg"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1661359970/Web%20Dev%20Projects/Group_79_2_1_bzk1ha.webp"
          />
          <p className="plantitle text-center">Ultimate HIIT workouts</p>{" "}</div>
        </div>
      </div>

        {/* more coming soon */}
      <h2 className="pb-10 text-white text-center mt-10 pt-10 sm:mt-0 text-6xl xsm:text-7xl sm:text-6xl md-lg:text-7xl lg:text-8xl font-bold stroke-removal">
      MORE COMING{" "}
        <span className="stroke-title">
          <br />
          SOON...{" "}
        </span>
      </h2>
     
    </>
  );
}

export default planOverview;
