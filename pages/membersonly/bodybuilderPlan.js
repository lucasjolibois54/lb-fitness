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
        description="Day 1 is a push day. A push workout is primarily centered around muscle groups that perform similar actions. The objective of the push workout is to help you achieve a well-rounded chest as well as big triceps."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661370819/Web%20Dev%20Projects/Rectangle_12_2_1_gdmvdj.webp"
        linking="/membersonly/bodybuilderDayOne"
        buttonText="Get started"
      />
            <BodybuilderDays
        name="Day 2"
        description="Day 2 is a leg day. When it comes to designing an effective leg workout, simpler is better. This workout focuses on the major muscle groups of the legs: the glutes, quads, hamstrings, and calves."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371893/Web%20Dev%20Projects/Rectangle_734_nch8oo.webp"
        linking="/membersonly/bodybuilderDayTwo"
        buttonText="Get started"
      />
            <BodybuilderDays
        name="Day 3"
        description="Day 3 is a pull day, which includes strength training movements that involve a concentric contraction. The focus on this day, will be helping you develop a wide back and big biceps."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661371892/Web%20Dev%20Projects/Rectangle_736_flriuh.webp"
        linking="/membersonly/bodybuilderDayThree"
        buttonText="Get started"
      />
            <BodybuilderDays
        name="Day 4"
        description="Day 4 can be a rest day, or an active rest day, depending on how you are feeling. Here you’ll be focusing on doing anything from yoga to a HIIT workout. In general, an active rest day features easier workouts."
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
