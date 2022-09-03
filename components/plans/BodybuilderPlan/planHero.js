function planHero() {
  return (
    <>
      <div className="sm:flex justify-center sm:h-screen">
        <div className="relative max-w-8xl">
          <h2
            className="lg:-mt-36 lg:-ml-0 !leading-tight absolute ml-3 sm:ml-10 text-5xl xsm:text-4
            5xl sm:text-4xl md:lg:text-6xl lg:!text-8xl stroke-removal font-bold text-white top-2/3 md:top-1/2 lg:bottom-0 lg:mr-10 sm:right-1/3 sm:translate-x-2/3 sm:translate-y-1/3"
          >
            <span className="stroke-title">READY TO</span>
            <br /> GET STARTED <br />{" "}
            <span className="stroke-title">AT LB FITNESS</span>
          </h2>
          <img
            className="bg hidden sm:block h-screen w-screen"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1661351404/Web%20Dev%20Projects/Group_76_6_mku7rr.png"
          />
          <img
            className="bg sm:hidden h-screen w-screen"
            src="https://res.cloudinary.com/dckwf6med/image/upload/v1661354873/Web%20Dev%20Projects/Group_76_7_2_t6zbl9.webp"
          />
        </div>
        {/* <h2 className="text-white mt-7 sm:mt-0 text-5xl xsm:text-6xl sm:text-5xl md:lg:text-6xl lg:text-7xl font-bold stroke-removal">WHY SHOULD <span className="stroke-title text-4xl xsm:text-5xl sm:text-4xl md-lg:text-5xl lg:text-6xl"><br /> YOU CHOOSE US  </span></h2> */}
      </div>
    </>
  );
}

export default planHero;
