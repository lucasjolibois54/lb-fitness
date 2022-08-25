import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PlanOverview from "../../components/plans/BodybuilderPlan/planOverview";
import HeaderAfterLogin from "../../components/main/headerAfterLogin";
import Hero from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/hero";
import BodybuilderDays from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/bodybuilderDays";
import Footer from "../../components/main/footer";

function bodybuilderPlan() {
  return (
    <div>
      <HeaderAfterLogin />
      <Hero />
      <BodybuilderDays
        name="Day 1"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661370819/Web%20Dev%20Projects/Rectangle_12_2_1_gdmvdj.webp"
        linking="/membersonly/bodybuilderDayOne"
        buttonText="Get started"
      />
            <BodybuilderDays
        name="Day 2"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371893/Web%20Dev%20Projects/Rectangle_734_nch8oo.webp"
        linking="/membersonly/bodybuilderDayTwo"
        buttonText="Get started"
      />
            <BodybuilderDays
        name="Day 3"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371892/Web%20Dev%20Projects/Rectangle_736_flriuh.webp"
        linking="/membersonly/bodybuilderDayThree"
        buttonText="Get started"
      />
            <BodybuilderDays
        name="Day 4"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371890/Web%20Dev%20Projects/Rectangle_738_nfvdi3.webp"
        linking="/membersonly/bodybuilderDayFour"
        buttonText="Get started"
      />
      <Footer />
    </div>
  );
}

export default bodybuilderPlan;

export const getServerSideProps = withPageAuthRequired();
