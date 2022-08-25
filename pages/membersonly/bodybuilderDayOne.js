import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PlanOverview from "../../components/plans/BodybuilderPlan/planOverview";
import HeaderAfterLogin from "../../components/main/headerAfterLogin";
import DayOneHero from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayOneHero";
import DayOneWorkout from "../../components/plans/BodybuilderPlan/BodybuilderWorkout/dayOneWorkout";
import Footer from "../../components/main/footer";

function bodyBuilderDayOne() {
  return (
    <div>
      <HeaderAfterLogin />
      <DayOneHero />
      <h2 className="sm:pb-0 text-white text-center mt-10 pt-10 sm:mt-20 text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl font-bold stroke-title">
        CHEST{" "}
        <span className="stroke-removal text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl">
          SECTION{" "}
        </span>
      </h2>
      <DayOneWorkout
        name="#1 Dumbell Chest Bench Press"
        description="Perform the dumbbell chest bench press by lying flat on a bench. Grab a pair of dumbbells and while engaging your core and glutes, lift the dumbbells above your chest. Lowe the dumbells until your lower arms form a 90-degree angle."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373967/Web%20Dev%20Projects/Rectangle-12_f8afm9.webp"
        sets="4 sets of 5-12 reps"
      />
            <DayOneWorkout
        name="#2 Chest Flyes With Machine"
        description="The chest fly on a machine is ideal for increasing chest strength and muscle mass by targeting the pectoralis muscles. This exercise is ideal to hit the pectoralis major and the pectoralis minor."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373808/Web%20Dev%20Projects/Rectangle_737_jldsby.webp"
        sets="3 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#3 Chest Press With Machine"
        description="Chest press on a machine is another great exercise for mass. Sit down on the chest press machine, step on the lever to bring the handles forward and bring it back to a 90 degree position. Push the handles away from you as you flex your pecs."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373809/Web%20Dev%20Projects/Rectangle_735_toffj7.webp"
        sets="4 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#4 Chest Dips"
        description="The chest dip is mostly a bodyweight exercise performed on parallel bars or dip station. To focus on your chest, the torso has to be leaning forward and the elbows angled out from the torso. This is good for chest, triceps, and shoulders."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373806/Web%20Dev%20Projects/Rectangle_739_ciltny.webp"
        sets="3 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#5 Cable Flyes"
        description="Cable fly is a single joint movement to help maximize tension in a single muscle group. During this exercise, you want to feel the cable chest fly all the way from the stretch at the start of the move to the contraction at the end"
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373805/Web%20Dev%20Projects/Rectangle_741_qvxccf.webp"
        sets="5 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#6 Incline Chest Press"
        description="The incline chest press fouces more on working the upper pecs. The main benefit from this, is to develop the upper portion of the pectoral muscles. The bench should be set to and incline angle. 15 to 30 degrees is usually good."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373800/Web%20Dev%20Projects/Rectangle_743_qvelhk.webp"
        sets="4 sets of 5-12 reps"
      />

      <h2 className="sm:pb-0 text-white text-center mt-10 pt-10 sm:mt-28 text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl font-bold stroke-title">
        TRICEPS{" "}
        <span className="stroke-removal text-3xl xsm:text-5xl sm:text-5xl md-lg:text-7xl lg:text-7xl">
          SECTION{" "}
        </span>
      </h2>

      <DayOneWorkout
        name="#7 Triceps Extension"
        description="The triceps extension is an isolation exercise that works the muscle on the back of the upper arm called the triceps. This muscles has three heads called the long head, the lateral head, and the medial head which are all being trained here."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373963/Web%20Dev%20Projects/Rectangle-745_erjtcl.webp"
        sets="4 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#8 Reverse Triceps 
        Extension"
        description="To perform this exercice, place both hands on the bar with an underhand grip, with the bar in front of you. Bend your elbows in order to allow the bar to come up towards your chest. Make sure your elbows remain in close contact with the sides of your body."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373905/Web%20Dev%20Projects/Rectangle-747_jfcxbx.webp"
        sets="4 sets of 5-12 reps"
      />
      <DayOneWorkout
        name="#9 Tricep Extension 
        Cable Rope"
        description="Grab the rope with a neutral grip (having yout palms faced in), then take a step backwards and straighten your back. Initiate the movement by extending the elbows and flexing the triceps. Pull the rope downward until the elbows are almost locked."
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1661373903/Web%20Dev%20Projects/Rectangle-749_n4fgkz.webp"
        sets="4 sets of 5-12 reps"
      />

      <Footer />
    </div>
  );
}

export default bodyBuilderDayOne;

export const getServerSideProps = withPageAuthRequired();
