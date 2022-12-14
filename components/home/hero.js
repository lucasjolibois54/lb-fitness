

function hero() {
    return (
        <div className="p-0 sm:pt-10 flex flex-col w-full lg:flex-row mb-4">

            {/* Max width container, center aligned, with some padding */}
            <div className="max-w-9xl mx-auto lg:px-0 sm:px-6 py-8">

                {/* <!-- Grid columns + some font styles for the children elements to inherit --> */}
                <div className="font-medium leading-7 space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-4 sm:space-y-0">

                    {/* <!-- Grid cell #1 --> */}
                    <div className=" py-3 px-6 md-lg:ml-5 xl:ml-20 md-lg:mt-10 xl:mt-20 rounded">

                        <h1 className="text-white mt-7 sm:mt-0 text-6xl xsm:text-7xl sm:text-6xl md-lg:text-7xl lg:text-8xl font-bold stroke-title">FITNESS <span className="stroke-removal"><br />TRAINING </span><br />PLAN</h1>
                        <p className="text-base md:text-lg text-dark-text py-5 lg:px-24 lg:pl-0 lg:pr-20 max-w-2xl text-gray-400 mt-5">
                        LB Fitness is the best free-to-use fitness platform in the industry. It contains workoutplans, diet plans, blogs ans so much more. Visit the about page or scroll down to learn more. Sign up today to get started!                        </p>
                        <div className="mt-4">
                            <a href="#explore-the-home-page" className="text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer">
                                Explore
                            </a></div>
                    </div>


                    {/* <!-- Grid cell #2 --> */}
                    <div className="py-3 float-right rounded">
                        <img
                            className="w-full  xl:w-6/6 float-right"
                            src={
                                "https://res.cloudinary.com/dckwf6med/image/upload/v1661210903/Web%20Dev%20Projects/Hero-img_agt5ce.png"
                            }
                            alt="Hero Image"
                        />
                    </div>

                </div>
            </div>




        </div>
    )
}

export default hero