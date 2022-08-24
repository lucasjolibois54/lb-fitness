import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PlanOverview from "../../components/plans/BodybuilderPlan/planOverview";
import HeaderAfterLogin from "../../components/main/headerAfterLogin";
import DayOneHero from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayOneHero";
import DayOneWorkout from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayOneWorkout";
import Footer from "../../components/main/footer";

function members() {
  return (
    <div>
      <HeaderAfterLogin />
      <DayOneHero />
      <DayOneWorkout
        name="Day 1"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661370819/Web%20Dev%20Projects/Rectangle_12_2_1_gdmvdj.webp"
        sets="5 sets of 5-12 reps"
      />
            <DayOneWorkout
        name="Day 2"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371893/Web%20Dev%20Projects/Rectangle_734_nch8oo.webp"
        sets="5 sets of 5-12 reps"
      />
            <DayOneWorkout
        name="Day 3"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371892/Web%20Dev%20Projects/Rectangle_736_flriuh.webp"
        sets="5 sets of 5-12 reps"
      />
            <DayOneWorkout
        name="Day 4"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371890/Web%20Dev%20Projects/Rectangle_738_nfvdi3.webp"
        sets="5 sets of 5-12 reps"
      />
      <Footer />
    </div>
  );
}

export default members;

export const getServerSideProps = withPageAuthRequired();
