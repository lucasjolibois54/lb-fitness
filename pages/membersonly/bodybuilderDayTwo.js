import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PlanOverview from "../../components/plans/BodybuilderPlan/planOverview";
import HeaderAfterLogin from "../../components/main/headerAfterLogin";
import DayTwoHero from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayTwoHero";
import DayOneWorkout from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayOneWorkout";
import Footer from "../../components/main/footer";

function bodyBuilderDayTwo() {
  return (
    <div>
      <HeaderAfterLogin />
      <DayTwoHero />
      <h2 className="sm:pb-0 text-white text-center mt-10 pt-10 sm:mt-20 text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl font-bold stroke-title">
        LEGS{" "}
        <span className="stroke-removal text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl">
          SECTION{" "}
        </span>
      </h2>
      <DayOneWorkout
        name="#1 Barbell Squat"
        description="A barbell squat is a compound exercise that activates muscle groups throughout your lower body, including your hamstrings, glutes and other muscles. This is why it is such a good exercise. To perform this, stand with your feet shoulder-width apart, and perform this with an arched back."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661378417/Web%20Dev%20Projects/AnyConv.com__Rectangle_744_1_qdanjm.webp"
        sets="3-4 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#2 Leg Extension"
        description="To perform this exercice, sit on a padded seat and raise a padded bar with your legs. The exercise mainly trains the quadriceps muscles of the front of the thigh. It is a good exercise to build lower body strength as well as to gain muscle definition."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661377053/Web%20Dev%20Projects/Rectangle-740_ez2shi.webp"
        sets="4 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#3 Leg Press"
        description="This is a great exercice to bring mass to your legs. To perform this, take a deep breath, extend your legs, lower the weight under control until the legs hits a 45 degree position (or slightly below). Push the weight back up by extending the knees but don't forcefully lockout."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661377389/Web%20Dev%20Projects/Rectangle-741-_1__kjn1fx.webp"
        sets="4 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#4 Prowler Push"
        description="Prowler push also known as the sled push is a functional full-body exercise that targets your quads, glutes, hip flexors, calves, hamstrings, core and other muscle groups. You can either choose to push the sled with minimal weight for a longer duration or stack on the resistance and push for a shorter distance."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661377054/Web%20Dev%20Projects/Rectangle-735_p8yt0p.webp"
        sets="4-5 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#5 Barbell Walking Lunge"
        description="To perform this exercice, step forward with one leg and allow both knees to bend simultaneously. Lower until the back knee touches the floor. Drive through the front foot and extend the knee as you stand up fully and return to the starting position. When this is done, repeat the process."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661377707/Web%20Dev%20Projects/Rectangle-742-_1__uiiywk.webp"
        sets="3-4 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#6 Barbell Hip Thrust"
        description="A hip thrust is an exercise defined by lifting your lower back and torso with your knees bent and your upper body resting on a bench. With proper form, the barbell hip thrust works muscle groups across your entire lower body, particularly the gluteal muscles."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661378153/Web%20Dev%20Projects/AnyConv.com__Rectangle_743_1_hjg1ui.webp"
        sets="3-4 sets of 5-12 reps"
      />

      <Footer />
    </div>
  );
}

export default bodyBuilderDayTwo;

export const getServerSideProps = withPageAuthRequired();
