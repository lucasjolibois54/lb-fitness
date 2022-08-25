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
      description="To do a sumo deadlift, you start by bending your knees and pushing your hips back, while keeping your chest high and lowering the barbell toward the floor. Drive your legs into the ground and keep your chest up while you pull the barbell back up, and locking out at the top. Lower back down with control."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661383858/Web%20Dev%20Projects/AnyConv.com__Rectangle_750_1_qylmh5.webp"
      sets="3-5 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#2 Lat Pulldown"
      description="To do this exercise, grab the bar with a wide grip, looking forward with your torso upright. Retract your shoulder blades and pull the bar down in front of you to your upper chest. Squeeze your lats at the bottom of the move."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661383985/Web%20Dev%20Projects/AnyConv.com__Rectangle_751_1_a86jfp.webp"
      sets="4 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#3 Seated Row Machine"
      description="To use the seated row machine, take a seat, push air into your chest, activate your back muscles, grab the handles, pull backward while contracting the back, and puss the weight back while doing it controlled. This is a great exercise for back definition and mass."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661384348/Web%20Dev%20Projects/AnyConv.com__Rectangle_752_1_jtlcc0.webp"
      sets="4 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#4 Reverse Dumbbell Fly"
      description="The reverse dumbbell fly is an amazing exercise to target the muscles in the upper back. It is done by leaning forwards, extending your arms on the side, and pull the weights backward while contracting the back. During a reverse flight, you work the rhomboid muscles in your upper back and shoulder region."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661384843/Web%20Dev%20Projects/AnyConv.com__Rectangle_753_2_1_x1m5mn.webp"
      sets="4 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#5 Laying Plate Pull Row"
      description="This exercise is an amazing exercise to target the muscles in the upper back as well as the lats. It is done by leaning forwards, grabbing the handles, and pulling the weights backward while contracting the back and lats."
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
      description="To perform this exercise, grab the bar with an underhand grip and extend your arms, stepping back. Next Engage your core and pull the bar up toward your shoulders using your biceps muscles, bending your arms at the elbow as you go."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661382626/Web%20Dev%20Projects/AnyConv.com__Rectangle_748_1_xpd1g0.webp"
      sets="4 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#8 Cable Rope Mixed Curl"
      description="To perform this exercise, stand with your knees slightly bent and feet planted firmly on the floor. Straighten your back, and keep your head steady. Curl the cable weight upward, toward the chest. Only the forearms move, rising up from the elbow."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661382450/Web%20Dev%20Projects/AnyConv.com__Rectangle_747_3_1_pfvzhr.webp"
      sets="4 sets of 5-12 reps"
    />
        <DayOneWorkout
      name="#8 Dumbbell Hammer Curl"
      description="The Dumbbell hammer curl is a strength training exercise that targets your long bicep muscle and forearms. The hammer curl varies from the traditional bicep curl by using a neutral grip with your palms facing each other during the full range of motion."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661381095/Web%20Dev%20Projects/AnyConv.com__Rectangle_745_2_s45omk.webp"
      sets="3-4 sets of 5-12 reps"
    />
     <DayOneWorkout
      name="#9 Forward EZ Bar Curl"
      description="The EZ Curl is a multi-angled speciality barbell designed to work your biceps (and triceps) while reducing stress from your elbows and wrists. The W shape of the bar, gives you multiple grip options making it a versatile barbell."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661381286/Web%20Dev%20Projects/AnyConv.com__Rectangle_746_1_qdi3nt.webp"
      sets="3-4 sets of 5-12 reps"
    />
    <DayOneWorkout
      name="#10 Bicep Chin-ups"
      description="The chin-ups is a popular strength training exercise for gymnasts. People frequently do this exercise with the intention of strengthening muscles such as the latissimus dorsi and biceps which makes it perfect for a pull day."
      image="https://res.cloudinary.com/dckwf6med/image/upload/v1661383254/Web%20Dev%20Projects/AnyConv.com__Rectangle_749_2_v19mou.webp"
      sets="2-4 sets of 5-12 reps"
    />

    <Footer />
  </div>
  );
}

export default bodyBuilderDayThree;

export const getServerSideProps = withPageAuthRequired();
