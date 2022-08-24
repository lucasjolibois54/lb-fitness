import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PlanOverview from "../../components/plans/BodybuilderPlan/planOverview";
import HeaderAfterLogin from "../../components/main/headerAfterLogin";
import DayThreeHero from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayThreeHero";
import DayOneWorkout from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayOneWorkout";
import Footer from "../../components/main/footer";

function bodyBuilderDayTwo() {
  return (
    <div>
    <HeaderAfterLogin />
    <DayThreeHero />
    <h2 className="sm:pb-0 text-white text-center mt-10 pt-10 sm:mt-20 text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl font-bold stroke-title">
      BACK{" "}
      <span className="stroke-removal text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl">
        SECTION{" "}
      </span>
    </h2>
    <DayOneWorkout
      name="#1 Sumo Deadlift"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373967/Web%20Dev%20Projects/Rectangle-12_f8afm9.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#2 Lat Pulldown"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373809/Web%20Dev%20Projects/Rectangle_735_toffj7.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#3 Seated Row Machine"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371892/Web%20Dev%20Projects/Rectangle_736_flriuh.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#4 Reverse Dumbbell Fly"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373806/Web%20Dev%20Projects/Rectangle_739_ciltny.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#5 Standing Cable Rope Row"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373805/Web%20Dev%20Projects/Rectangle_741_qvxccf.webp"
      sets="5 sets of 5-12 reps"
    />

    <h2 className="sm:pb-0 text-white text-center mt-10 pt-10 sm:mt-28 text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl font-bold stroke-title">
      BICEPS{" "}
      <span className="stroke-removal text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl">
        SECTION{" "}
      </span>
    </h2>

    <DayOneWorkout
      name="#7  Cable Bar Hammer Curl"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373963/Web%20Dev%20Projects/Rectangle-745_erjtcl.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#8 Cable Rope Hammer Curl"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373905/Web%20Dev%20Projects/Rectangle-747_jfcxbx.webp"
      sets="5 sets of 5-12 reps"
    />
     <DayOneWorkout
      name="#9 Forward EZ Bar Curl"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373903/Web%20Dev%20Projects/Rectangle-749_n4fgkz.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#10 Bicep Chin-ups"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373903/Web%20Dev%20Projects/Rectangle-749_n4fgkz.webp"
      sets="5 sets of 5-12 reps"
    />

    <Footer />
  </div>
  );
}

export default bodyBuilderDayTwo;

export const getServerSideProps = withPageAuthRequired();
