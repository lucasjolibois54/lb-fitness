import React from "react";
import Link from 'next/link'

function overview() {
  return (
    <>
      <div className="mt-16 sm:mt-36 mb-20  max-w-7xl  mx-auto flex flex-col sm:flex-row items-center justify-center sm:space-x-14">
        <div className="w-4/6 sm:w-3/12 space-y-4">
          
         <Link href="/membersonly/workoutPlans"><div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
            className="planimg" alt="Image"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1661723011/Web%20Dev%20Projects/Rectangle_800_gfm3b8.webp"
          />
          <p className="plantitle text-center text-5xl font-bold stroke-title">Workouts</p></div></Link>
        </div>

        <div className="w-4/6 sm:w-3/12 space-y-4">
        <Link href="/membersonly/meals"><div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
            className="planimg" alt="Image"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1661723009/Web%20Dev%20Projects/Rectangle_801_kno1yw.webp"
          />
          <p className="plantitle text-center text-5xl font-bold stroke-title">Meals</p>{" "}</div></Link>
        </div>

        <div className="w-4/6 sm:w-3/12 space-y-4">
        <Link href="/blogs"><div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
            className="planimg" alt="Image"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1661723008/Web%20Dev%20Projects/Rectangle_802_iyaup1.webp"
          />
          <p className="plantitle text-center text-5xl font-bold stroke-title">Blog</p>{" "}</div></Link>
        </div>
      </div>

     
    </>
  );
}

export default overview;
