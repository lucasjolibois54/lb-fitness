import Link from 'next/link'

function aboutUs() {
    return (
        <>

            <div className="my-auto mx-auto flex flex-col-reverse md:flex-row-reverse mt-0 mb-0 max-w-7xl  md:p-16">
                <div className="mx-auto float-righ">
                    <img alt="Image" className="w-11/12 hidden sm:block" src="https://res.cloudinary.com/dckwf6med/image/upload/v1661295966/Web%20Dev%20Projects/Group_75_1_yyn9db.png" />
                    <img alt="Image" className="w-full px-5 sm:hidden rounded-xl" src="https://res.cloudinary.com/dckwf6med/image/upload/v1662239806/Web%20Dev%20Projects/Mask_group_10_1_mdempb.webp" />

                </div>
                <div className="text-center md:text-left mx-5 md:mx-0 mb-10 md:mb-0 flex flex-col justify-center">
                    <h2 className="text-white mt-36 sm:mt-0 text-5xl xsm:text-5xl sm:text-5xl md:lg:text-6xl lg:text-7xl font-bold stroke-removal">LEARN MORE <span className="stroke-title text-4xl xsm:text-5xl sm:text-4xl md-lg:text-5xl lg:text-6xl"><br /> ABOUT US  </span></h2>
                    <p className="text-base md:text-lg py-5 lg:px-24 lg:pl-0 lg:pr-20 max-w-2xl text-gray-400 mt-5">
                    LB Fitness was established to help you be the best you possible. We believe you shouldn&apos;t have to pay for that, which is why it is totally free. Everybody has different goals, that&apos;s why we have different plans, giving anyone to oppotunity to get started. Whether you&apos;re experienced or is just getting started. Sign up to get started!                    </p>
                    <div className="mt-4 space-x-3">
                        <Link href="/about"><span className=" text-pink py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer">
                            Learn more
                        </span></Link></div>
                </div>
            </div>

        </>
    )
}

export default aboutUs