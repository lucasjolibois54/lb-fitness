import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PlanOverview from "../../components/plans/BodybuilderPlan/planOverview";
import HeaderAfterLogin from "../../components/main/headerAfterLogin";
import DayFourHero from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayFourHero";
import DayOneWorkout from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayOneWorkout";
import Footer from "../../components/main/footer";

function bodyBuilderDayThree() {
  return (
    <div>
    <HeaderAfterLogin />
    <DayFourHero />
    <h2 className="sm:pb-0 text-white text-center mt-10 pt-10 sm:mt-20 text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl font-bold stroke-title">
      CARDIO{" "}
      <span className="stroke-removal text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl">
        SECTION{" "}
      </span>
    </h2>
    <DayOneWorkout
      name="#1 HIIT- Running On Treadmil"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661387561/Web%20Dev%20Projects/AnyConv.com__Rectangle_755_1_sa0bwr.webp"
      sets="30s run, 30s walk and repeat"
    />
    <DayOneWorkout
      name="#2 Jump Rope"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661387878/Web%20Dev%20Projects/AnyConv.com__Rectangle_756_1_ciccf6.webp"
      sets="30s high speed, 30s-1m slow and repeat"
    />
    {/* <DayOneWorkout
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
    /> */}

    <Footer />
  </div>
  );
}

export default bodyBuilderDayThree;

export const getServerSideProps = withPageAuthRequired();
