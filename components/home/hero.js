

function hero() {
    return (
        <div className="p-0 pt-10 flex flex-col w-full lg:flex-row mb-4">

            {/* Max width container, center aligned, with some padding */}
            <div class="max-w-9xl mx-auto lg:px-0 sm:px-6 py-8">

                {/* <!-- Grid columns + some font styles for the children elements to inherit --> */}
                <div class="font-medium leading-7 space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-4 sm:space-y-0">

                    {/* <!-- Grid cell #1 --> */}
                    <div class=" py-3 px-6 ml-20 mt-20 rounded">

                        <h1 className="text-white text-8xl font-bold stroke-title">FITNESS <span className="stroke-removal"><br />TRAINING </span><br />PLAN</h1>
                        <p className="text-base md:text-lg px-5 text-dark-text py-5 md:px-24 lg:pl-0 lg:pr-20 max-w-2xl text-gray-400 mt-5">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                        </p>

                    </div>


                    {/* <!-- Grid cell #2 --> */}
                    <div class="py-3 float-right rounded">
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