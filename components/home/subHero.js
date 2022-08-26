

function subHero() {
    return (
        <div className="flex items-center justify-center">
            <div id="explore-the-home-page" className="mb-20 lg:mb-0 sm:mt-16 max-w-7xl mx-auto">
                <div className="sm:flex never:flex-col flex-row hidden">

                    <p className=" text-xl lg:text-lg xl:text-xl font-light border-r-2 border-white lg:pr-10 xl:pr-20 hidden lg:block">
                        Our mission is to help you build <br />
                        muscles and get shreded for free
                    </p>
                    <h3 className="text-4xl sm:text-5xl hero-sm-md:text-6xl font-extrabold pl-20 md:pl-0 lg:pl-10 xl:pl-20 ">
                        &gt;40
                    </h3>
                    <p className="hero-sm-md:text-xl lg:text-lg xl:text-xl font-light pl-3 text-gray-subtext">over 40 total <br />
                        clients</p>

                    <h3 className="text-4xl sm:text-5xl hero-sm-md:text-6xl font-extrabold pl-7 sm:pl-10 md-lg:pl-20 lg:pl-10 xl:pl-20">
                        &gt;7
                    </h3>
                    <p className="hero-sm-md:text-xl lg:text-lg xl:text-xl font-light pl-3 text-gray-subtext">over 7 year <br />
                        of experience</p>

                    <h3 className="text-4xl sm:text-5xl hero-sm-md:text-6xl font-extrabold ml-4 sm:pl-10 md-lg:pl-20 lg:pl-10 xl:pl-20">
                        7K
                    </h3>
                    <p className="text-sm hero-sm-md:text-xl lg:text-lg xl:text-xl font-light pl-3 text-gray-subtext">Sign-up limit <br />
                        at 7k users</p>
                </div>



                {/* mobile */}

                <div className="sm:hidden">
                    <div className="flex flex-col mt-0 sm:hidden items-center justify-center pb-5">
                        <img
                            className="w-20 pt-0"
                            src={
                                "https://res.cloudinary.com/dckwf6med/image/upload/v1661218068/Web%20Dev%20Projects/lucas-pb_qemirz.png"
                            }
                            alt="Hero Image"
                        />
                        <div className="flex flex-col pt-2 pl-3">
                            <h3 className="text-xl text-center">Lucas Jolibois</h3>
                            <p className="text-xl font-light text-gray-subtext text-center">CEO, owner</p>
                            <p className=" text-lg pt-2 text-center text-gray-300 font-light">
                                Our mission is to help you build <br />
                                muscles and get shreded for free
                            </p>
                        </div>
                    </div>

                    <div className="border-t-2 border-white sm:hiddden">
                        <div className="flex never:flex-col flex-row sm:hidden items-center justify-center pt-5">
                            <div className="flex flex-col">
                                <h3 className="text-5xl font-extrabold text-center pl-1  ">
                                    &gt;40
                                </h3>
                                <p className=" font-light pl-3 text-gray-subtext text-center">over 40 total <br />
                                    clients</p></div>
                            <div className="flex flex-col ml-7">
                                <h3 className=" text-5xl font-extrabold text-center pl-1 ">
                                    &gt;7
                                </h3>
                                <p className="font-light pl-3 text-gray-subtext text-center">over 7 year <br />
                                    of experience</p></div>
                            <div className="flex flex-col ml-7">
                                <h3 className=" text-5xl font-extrabold text-center pl-1 ">
                                    7K
                                </h3>
                                <p className="font-light pl-3 text-gray-subtext text-center">Sign-up limit <br />
                                    at 7k users</p></div>

                        </div></div></div>
                {/* mobile stop */}



                <div className="lg:flex mt-0 hidden">
                    <img
                        className="w-20 pt-5"
                        src={
                            "https://res.cloudinary.com/dckwf6med/image/upload/v1661218068/Web%20Dev%20Projects/lucas-pb_qemirz.png"
                        }
                        alt="Hero Image"
                    />
                    <div className="flex flex-col pt-7 pl-3">
                        <h3 className="text-xl">Lucas Jolibois</h3>
                        <p className="text-xl font-light text-gray-subtext">CEO, owner</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default subHero