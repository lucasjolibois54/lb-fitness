import React from "react";

function footer() {
  return (
    <>
    <div className="mt-20 mb-2  max-w-7xl  mx-auto flex flex-col sm:flex-row items-center justify-center sm:space-x-14 border-white/20 border-t">
      <div className="w-5/6 sm:w-3/12">
        <p className="text-sm pt-10 text-gray-200 ">
        LB Fitness is a free-to-use fitness platform engineered to help you
            achieve goals. Currently, we only have fitness plans, but in the
            near future, there will be diet plans, blogs, and a lot
            more.
        </p>
        <div className="flex space-x-2 mt-7 mb-8 md:mb-0">
        <a target="blank" href="https://www.instagram.com/lbfitness.eu/" ><img className="w-7/12" src="https://res.cloudinary.com/dckwf6med/image/upload/v1661361428/Work-%20GS/svg/Instagram_-_Negative_isdu92.svg"/></a>
          <a target="blank" href="https://github.com/lucasjolibois54/lb-fitness" ><img className="w-7/12" src="https://res.cloudinary.com/dckwf6med/image/upload/v1661361428/Work-%20GS/svg/Github_-_Negative_eecs8r.svg"/></a>
          {/* <p>YT</p> */}
        </div>
      </div>
      <div className="hidden sm:block w-2/12 -mt-5 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3"><a href="/api/auth/logout" className="hover:text-footer-hover cursor-pointer">
          Home</a>
        </p>
        <p className=" text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/about">About us</a></p>
        <p className=" text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/api/auth/login">Login &amp; Signup</a></p>
      </div>

      <div className="hidden sm:block w-2/12 -mt-5 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/membersonly/introduction">Introduction</a></p>
        <p className=" text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/api/auth/login">Plan Overview</a></p>
        <p className=" text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/blogs">Blog Overview</a></p>
      </div>

      <div className="hidden sm:block w-2/12 -mt-5 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/about/#faq-section">FAQ'S</a></p>
        <p className=" text-gray-200 font-light ml-3">Diet Plan</p>
        <p className=" text-gray-200 font-light ml-3">Find Your Plan</p>
      </div>
    </div>




      <div className="px-6 -mt-10 pb-20  max-w-7xl  mx-auto flex">

      <div className=" sm:hidden w-4/12 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3"><a href="/api/auth/logout" className="hover:text-footer-hover cursor-pointer">
          Home</a>
        </p>
        <p className=" text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/about">About us</a></p>
        <p className=" text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/api/auth/login">Login/ Signup</a></p>
      </div>

      <div className=" sm:hidden w-4/12 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/membersonly/introduction">Introduction</a></p>
        <p className=" text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/api/auth/login">Plan Overview</a></p>
        <p className=" text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/blogs">Blog Overview</a></p>
      </div>

      <div className=" sm:hidden w-4/12 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3"><a className="hover:text-footer-hover cursor-pointer" href="/about/#faq-section">FAQ'S</a></p>
        <p className=" text-gray-200 font-light ml-3">Diet Plan</p>
        <p className=" text-gray-200 font-light ml-3">Find Your Plan</p>
      </div>
    </div>
    
    
    </>
  );
}

export default footer;
