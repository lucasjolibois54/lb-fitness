import Link from 'next/link'

function whyUs() {
    return (

        <div className="my-auto mx-auto flex flex-col-reverse md:flex-row mt-10 mb-0 max-w-7xl  md:p-16">
            <div className="mx-auto float-righ">
                <img alt="Image" className="w-11/12 hidden sm:block" src="https://res.cloudinary.com/dckwf6med/image/upload/v1661290332/Web%20Dev%20Projects/Group_74_wolzcr.png" />
                <img alt="Image" className="w-full px-5 sm:hidden rounded-xl" src="https://res.cloudinary.com/dckwf6med/image/upload/v1662239593/Web%20Dev%20Projects/Mask_group_9_1_v9gdrr.webp" />
            </div>
            <div className="text-center md:text-left mx-5 md:mx-0 mb-10 md:mb-0 flex flex-col justify-center">
                <h2 className="hidden sm:block text-white mt-10 sm:mt-0 text-5xl xsm:text-5xl sm:text-5xl md:lg:text-6xl lg:text-7xl font-bold stroke-removal">WHY SHOULD <span className="stroke-title text-4xl xsm:text-5xl sm:text-4xl md-lg:text-5xl lg:text-6xl"><br /> YOU CHOOSE US  </span></h2>
                <h2 className="sm:hidden text-white mt-0 sm:mt-0 text-5xl xsm:text-5xl sm:text-5xl md:lg:text-6xl lg:text-7xl font-bold stroke-removal">WHY TO <span className="stroke-title text-4xl xsm:text-5xl sm:text-4xl md-lg:text-5xl lg:text-6xl"><br /> CHOOSE US  </span></h2>
                <p className=" text-base md:text-lg py-5 lg:px-24 lg:pl-0 lg:pr-20 max-w-2xl text-gray-400 mt-5">
                LB Fitness is the best free-to-use fitness platform available on the internet, containing workout &amp; diet plans, fitness related blogs, quizzes to help you achieve your goals, and so much more. Sign up to get started!                </p>
                <div className="mt-4">
                    <Link  href="/api/auth/login"><span className="text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer">
                        Sign up
                    </span></Link></div>
            </div>
        </div>

    )
}

export default whyUs