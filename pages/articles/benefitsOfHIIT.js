import React from 'react'
import Hero from '../../components/blogs/blog-articles/hero'
import HomeHeader from '../../components/main/homeHeader'
import TextSection from '../../components/blogs/blog-articles/textSection'
import ParagraphSection from '../../components/blogs/blog-articles/paragraphSection'
import TextSlider from '../../components/blogs/blog-articles/textSlider'
import SubTextSection from '../../components/blogs/blog-articles/subTextSection'
import BlogImage from '../../components/blogs/blog-articles/blogImage'
import ExternalLinking from '../../components/blogs/blog-articles/externalLinking'
import Footer from '../../components/main/footer'

function benefitsOfHIIT() {
  return (
    <div>
      <HomeHeader/>
        <Hero
        title="Benefits of High Intensity Interval Training (HIIT)"
        readTime="READ TIME • 3 MIN"
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1662139445/Web%20Dev%20Projects/image_60_1_1_jwn4un.webp"
        />
        
        <TextSection
        title="Why should you do HIIT?"
        paragraph="HIIT training is a perfect way not only to burn calories, but also to burn fat. After your workout, all of that intense exertion kicks your body's repair cycle into hyperdrive. This means that your body will start burning more calories for the next 6 to 24 hours. Combining HIIT with strength training makes it a perfect way to lose weight, while also building muscle mass. In addition to muscle preservation and fat burning, HIIT also helps your body to create more HGH  (up to more than 400%) during these 6 to 24 hours after the workout. This is why this type of training has been so popularized throughout the last couple of years."
        />

        <ParagraphSection
                paragraph="HIIT workout usually takes between 10 to 20 minutes, making it the perfect exercise for people with “no time in their hands”. HIIT stands for High-Intensity Interval Training and is a combination between brief and very-high intensity cardio exercises, followed by an equal or longer “rest”. Often the rest-time is a repetition of the same high-intensity exercise, but with very little intensity. Next, let’s look into different types of high-intensity interval exercises."
/>

        <TextSlider/>

        <SubTextSection
         title="1.- The TRX HIIT Circuit"
         paragraph="Let’s start off with an interesting yet intense HIIT workout, making it perfect for people who are tired repeatedly doing the same exercise. This exercise is called the TRX, and is a circuit consisting of 6 exercises. The circuit consists of: Jump squats or jump box (15 reps), Back rows (15 reps), Left single leg squats (10 reps), Right single leg squats (10 reps), Mountain climbers (30 seconds), and then you finish os with the Plank (60 seconds). After the circuit is completed, you rest for 1 to 2 minutes, and then you repeat it 4 to 6 more times. We definitely weren’t kidding when we said that it was intense. Are you up for the challenge?"
         />
         <BlogImage
                 image="https://res.cloudinary.com/dckwf6med/image/upload/v1662153402/Web%20Dev%20Projects/Mask_group_2_2_ajp5hg.webp"
                 />

<SubTextSection
         title="2.- The Jump Rope HIIT Workout"
         paragraph="The Jump Rope HIIT Workout is a pretty basic and popular exercise, as jump ropes are one of the most efficient tools to burn calories. You can do this HIIT working in one of two ways. The most popular one is where you jump for 20s-45s as fast as you possibly can, and then you jump slowly for 1.5 times longer than the intense jumping. Repeat the process for 10-20 min (or longer if possible). If you want to up the pace, you can change the jumping method, by doing the following: jump for 20 seconds, rest for 10s, jump on the right foot for 20s, rest for 10s, jump on the left foot for 20s, rest for 10 seconds, jump with high knees for 20s, rest for 10s, jump for 20s, rest for 10s, rest for one minute."
         />
          <BlogImage
                 image="https://res.cloudinary.com/dckwf6med/image/upload/v1662153757/Web%20Dev%20Projects/Mask_group_3_1_lt7t4s.webp"
                 />

<SubTextSection
         title="3.- The Battle Ropes Blitz"
         paragraph="The Battle Ropes Blitz HIIT workout is a globalized form of HIIT training, known all across the globe, and it is extremely easy to get started with it. Just move the battle ropes at as fast and aggressive of a pace as you possibly can. You can decide whether you prefer slams or waves, as long as you work for at least 30 seconds. Once the 30 seconds have passed, rest for about a minute and then repeat for 10 rounds."
         />
          <BlogImage
                 image="https://res.cloudinary.com/dckwf6med/image/upload/v1662153972/Web%20Dev%20Projects/Mask_group_4_1_wfmzgl.webp"
                 />
      

      <TextSection
        title="Summary"
        paragraph="As mentioned throughout the blog article, there are a lot of benefits when doing high intensity interval training, additionally, there are also a lot of different ways (exercises) to practice HIIT. It's just important to keep your heart rate up, take breaks (active rest) in between your “sets”. When doing the actual exercises, go as hard as you can. Here, we just went through some of them, as the list can go on forever. If you would like to see more HIIT exercises, click on the link below in order to access our full HIIT workout plan."
        />
        <ExternalLinking
        text="See the HIIT workout plan"
        link="/membersonly/workoutPlans"/>

        <Footer/></div>
  )
}

export default benefitsOfHIIT