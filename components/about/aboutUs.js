
function aboutUs() {
    return (
<>
        <div className="my-auto mx-auto flex flex-col-reverse md:flex-row mt-36 mb-0 max-w-7xl md:p-16">
            <div className="mx-auto float-righ">
                <img alt="Image" className="w-11/12 hidden sm:block" src="https://res.cloudinary.com/dckwf6med/image/upload/v1661524337/Web%20Dev%20Projects/image_57_2_ejbqkl.png" />
                <img alt="Image" className="w-full px-5 sm:hidden" src="https://res.cloudinary.com/dckwf6med/image/upload/v1662238774/Web%20Dev%20Projects/image_68_1_kt56ne.webp" />

            </div>
            <div className="text-center md:text-left mx-5 md:mx-0 mb-10 md:mb-0 flex flex-col justify-center">
                <h2 className="text-white mt-7 sm:mt-0 text-5xl xsm:text-5xl sm:text-5xl md:lg:text-6xl lg:text-7xl font-bold stroke-removal">WHY SHOULD <span className="stroke-title text-4xl xsm:text-4xl sm:text-4xl md-lg:text-5xl lg:text-6xl"><br /> YOU CHOOSE US  </span></h2>
                <p className="text-base md:text-lg py-5 lg:px-24 lg:pl-0 lg:pr-20 max-w-2xl text-gray-400 sm:mt-5">
                LB Fitness is the best free-to-use fitness platform available on the internet, containing workout &amp; diet plans, fitness related blogs, quizzes to help you achieve your goals, and so much more. Sign up to get started!                </p>
                <div className="mt-4">
                    <a className="text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer">
                        Sign up
                    </a></div>
            </div>
        </div>
        </>
    )
}

export default aboutUs