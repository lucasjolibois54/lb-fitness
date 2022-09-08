import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';

export default function HeroOverview() {
  /*const [state, setState] = useState();
  const toggleAccordion = () => {
    setState(state === "" ? "bg-green-500" : "")
  }*/

 const { user } = useUser()
  return (
    <>
    <div className='max-w-7xl mx-auto'>
    {/* <button onClick={toggleAccordion} className={`bg-red-500 ${state}`}>HEYYO</button> */}
              {/* more coming soon */}
              <h2 className=" !leading-tight pb-10 text-white text-center mt-10 pt-20 sm:mt-36 text-4xl xsm:text-4xl sm:text-6xl md-lg:text-7xl lg:text-6xl font-bold stroke-removal">
              WELCOME TO THE OVERVIEW PAGE{" "}
        <span className=" text-2xl xsm:text-2xl sm:text-4xl md-lg:text-5xl lg:text-6xl stroke-title">
          <br />
           {user.name}{" "} 
        </span>
      </h2>
    </div>
    </>
  )
}

