

function subHero() {
    return (
        <div className="mb-20 mt-20 max-w-7xl mx-auto">
            <div className="flex">


                <p className=" text-lg border-r-2 border-white pr-20">
                    Our mission is to help you build <br />
                    muscles and get shreded for free
                </p>
                <h3 className="text-6xl font-extrabold pl-20">
                    &gt;40
                </h3>
                <p className="text-xl pl-3 text-gray-subtext">over 40 total <br />
                    clients</p>

                <h3 className="text-6xl font-extrabold pl-20">
                    &gt;7
                </h3>
                <p className="text-xl pl-3 text-gray-subtext">over 7 year <br />
                    of experience</p>
            </div>

            <div className="flex">
            <img
                className="w-1/12 pt-5"
                src={
                    "https://res.cloudinary.com/dckwf6med/image/upload/v1661218068/Web%20Dev%20Projects/lucas-pb_qemirz.png"
                }
                alt="Hero Image"
            />
            <h3>Lucas Jolibois</h3>
            <p><br/>CEO, owner</p>
            </div>

        </div>
    )
}

export default subHero