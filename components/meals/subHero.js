import React from 'react'
import Link from 'next/link'

function subHero() {
  return (
    <>

    <div className='max-w-5xl mx-auto mt-36'>
    <div id='subHeroFood' className='e mt-5 px-5'>
        <h3 className='!leading-tight text-center mt-4 text-white text-4xl xsm:text-3xl md:pr-7 sm:text-4xl md:6xl md-lg:text-5xl lg:text-5xl font-bold stroke-removal'>EXPLORE ALL OUR FREE <br/> RECEPIES AND DIET PLANS</h3>
        <p className="text-base text-center font-light md:text-lg py-5 lg:px-24 mx-auto max-w-2xl text-gray-400 mt-0">
        Welcome to the diet plans. All the plans are different. Read all the plan discriptions and find one you like. Make sure to give us a follow <a href="https://www.instagram.com/lbfitness.eu/" target="_blank" rel="noreferrer" className='text-pink'>@lbfitness.eu</a> and join the community.  </p>
    </div>



    <div className="mt-5 sm:mt-0 mb-10  mx-auto px-5 flex flex-col sm:flex-row sm:space-x-14">
        <div className="w-full mx-auto my-5 sm:w-4/12 space-y-4">
          
        <a href="https://www.instagram.com/lbfitness.eu/" rel="noreferrer" target="_blank"><div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
            alt="Image" className="planimg rounded-sm"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1662362266/Web%20Dev%20Projects/image-70-_1_-_1__hskhey.webp"
          />
          </div></a>
        </div>

        <div className="w-full mx-auto my-5 sm:w-4/12 space-y-4">
        <a href="https://www.instagram.com/lbfitness.eu/" rel="noreferrer" target="_blank"><div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
            alt="Image" className="planimg rounded-sm"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1662362179/Web%20Dev%20Projects/image-69-_1__hdkvot.webp"
          />
          </div></a>
        </div>

        <div className="w-full mx-auto my-5 sm:w-4/12 space-y-4">
        <a href="https://www.instagram.com/lbfitness.eu/" rel="noreferrer" target="_blank"><div className="transition duration-300 group transform hover:-translate-y-3 hover:shadow-2xl rounded-2xl cursor-pointer"><img
            alt="Image" className="planimg rounded-sm"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1662362266/Web%20Dev%20Projects/image-70-_1_-_1__hskhey.webp"
          />
          </div></a>
        </div>
      </div>
      <div className="mt-7 text-center">
      <Link  href="/"><span
          className="text-pink py-2 px-10 rounded-full text-xl border-gray-stroke border-2 cursor-pointer"
        >
          See all plans
        </span></Link>
      </div>

   
    </div>
    </>
  )
}

export default subHero