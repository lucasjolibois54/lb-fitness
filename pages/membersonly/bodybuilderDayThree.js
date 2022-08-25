import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PlanOverview from "../../components/plans/BodybuilderPlan/planOverview";
import HeaderAfterLogin from "../../components/main/headerAfterLogin";
import DayThreeHero from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayThreeHero";
import DayOneWorkout from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayOneWorkout";
import Footer from "../../components/main/footer";

function bodyBuilderDayThree() {
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
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661383858/Web%20Dev%20Projects/AnyConv.com__Rectangle_750_1_qylmh5.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#2 Lat Pulldown"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661383985/Web%20Dev%20Projects/AnyConv.com__Rectangle_751_1_a86jfp.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#3 Seated Row Machine"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661384348/Web%20Dev%20Projects/AnyConv.com__Rectangle_752_1_jtlcc0.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#4 Reverse Dumbbell Fly"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661384843/Web%20Dev%20Projects/AnyConv.com__Rectangle_753_2_1_x1m5mn.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#5 Laying Plate Pull Row"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661386264/Web%20Dev%20Projects/AnyConv.com__Rectangle_754_2_lpvin1.webp"
      sets="5 sets of 5-12 reps"
    />

    <h2 className="sm:pb-0 text-white text-center mt-10 pt-10 sm:mt-28 text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl font-bold stroke-title">
      BICEPS{" "}
      <span className="stroke-removal text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl">
        SECTION{" "}
      </span>
    </h2>

    <DayOneWorkout
      name="#7 Cable Bar Curl"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661382626/Web%20Dev%20Projects/AnyConv.com__Rectangle_748_1_xpd1g0.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#8 Cable Rope Mixed Curl"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661382450/Web%20Dev%20Projects/AnyConv.com__Rectangle_747_3_1_pfvzhr.webp"
      sets="5 sets of 5-12 reps"
    />
        <DayOneWorkout
      name="#8 Dumbell Hammer Curl"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661381095/Web%20Dev%20Projects/AnyConv.com__Rectangle_745_2_s45omk.webp"
      sets="5 sets of 5-12 reps"
    />
     <DayOneWorkout
      name="#9 Forward EZ Bar Curl"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661381286/Web%20Dev%20Projects/AnyConv.com__Rectangle_746_1_qdi3nt.webp"
      sets="5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#10 Bicep Chin-ups"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661383254/Web%20Dev%20Projects/AnyConv.com__Rectangle_749_2_v19mou.webp"
      sets="5 sets of 5-12 reps"
    />

    <Footer />
  </div>
  );
}

export default bodyBuilderDayThree;

export const getServerSideProps = withPageAuthRequired();
