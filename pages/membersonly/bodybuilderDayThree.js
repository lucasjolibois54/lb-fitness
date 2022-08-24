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
        name="#1 Barbell Squat"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661378417/Web%20Dev%20Projects/AnyConv.com__Rectangle_744_1_qdanjm.webp"
        sets="5 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#2 Leg Extension"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661377053/Web%20Dev%20Projects/Rectangle-740_ez2shi.webp"
        sets="5 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#3 Leg press"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661377389/Web%20Dev%20Projects/Rectangle-741-_1__kjn1fx.webp"
        sets="5 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#4 Prowler Push"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661377054/Web%20Dev%20Projects/Rectangle-735_p8yt0p.webp"
        sets="5 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#5 Barbell Walking Lunge"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661377707/Web%20Dev%20Projects/Rectangle-742-_1__uiiywk.webp"
        sets="5 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#6 Barbell Hip Thrust"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661378153/Web%20Dev%20Projects/AnyConv.com__Rectangle_743_1_hjg1ui.webp"
        sets="5 sets of 5-12 reps"
      />

      <Footer />
    </div>
  );
}

export default bodyBuilderDayTwo;

export const getServerSideProps = withPageAuthRequired();
