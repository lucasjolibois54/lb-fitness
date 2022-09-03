import React from "react";
import Link from 'next/link'

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
        <div className="flex space-x-5 mt-5 mb-8 md:mb-0">
        <Link target="blank" href="https://www.instagram.com/lbfitness.eu/" ><img alt="Icon" className="w-1/12 cursor-pointer" src="https://res.cloudinary.com/dckwf6med/image/upload/v1661361428/Work-%20GS/svg/Instagram_-_Negative_isdu92.svg"/></Link>
          <Link target="blank" href="https://github.com/lucasjolibois54/lb-fitness" ><img alt="Icon" className="w-1/12 cursor-pointer" src="https://res.cloudinary.com/dckwf6med/image/upload/v1661361428/Work-%20GS/svg/Github_-_Negative_eecs8r.svg"/></Link>
          {/* <p>YT</p> */}
        </div>
      </div>
      <div className="hidden sm:block w-2/12 -mt-5 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3 hover:text-footer-hover"><Link href="/api/auth/logout" className=" cursor-pointer">
          Home</Link>
        </p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/about">About us</Link></p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/api/auth/login">Login &amp; Signup</Link></p>
      </div>

      <div className="hidden sm:block w-2/12 -mt-5 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className="cursor-pointer" href="/membersonly/introduction">Introduction</Link></p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/api/auth/login">Plan Overview</Link></p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/blogs">Blog Overview</Link></p>
      </div>

      <div className="hidden sm:block w-2/12 -mt-5 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/about/#faq-section">FAQ&apos;S</Link></p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/membersonly/meals">Meal Plans</Link></p>
        <p className=" text-gray-200 font-light ml-3">Find Your Plan</p>
      </div>
    </div>




      <div className="px-6 -mt-10 pb-20  max-w-7xl  mx-auto flex">

      <div className=" sm:hidden w-4/12 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3 hover:text-footer-hover"><Link href="/api/auth/logout" className=" cursor-pointer">
          Home</Link>
        </p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/about">About us</Link></p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/api/auth/login">Login/ Signup</Link></p>
      </div>

      <div className=" sm:hidden w-4/12 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/membersonly/introduction">Introduction</Link></p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/api/auth/login">Plan Overview</Link></p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/blogs">Blog Overview</Link></p>
      </div>

      <div className=" sm:hidden w-4/12 space-y-4">
        <p className="mt-6 text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/about/#faq-section">FAQ&apos;S</Link></p>
        <p className=" text-gray-200 font-light ml-3 hover:text-footer-hover"><Link className=" cursor-pointer" href="/membersonly/meals">Meal Plans</Link></p>
        <p className=" text-gray-200 font-light ml-3">Find Your Plan</p>
      </div>
    </div>
    
    
    </>
  );
}

export default footer;
