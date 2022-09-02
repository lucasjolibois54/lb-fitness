import React from 'react'
import Hero from '../../components/blogs/blog-articles/hero'
import HomeHeader from '../../components/main/homeHeader'
import TextSection from '../../components/blogs/blog-articles/textSection'
import ParagraphSection from '../../components/blogs/blog-articles/paragraphSection'
import TextSlider from '../../components/blogs/blog-articles/textSlider'
import SubTextSection from '../../components/blogs/blog-articles/subTextSection'
import BlogImage from '../../components/blogs/blog-articles/blogImage'
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
         title="1.- The one innit"
         paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
         />
         <BlogImage
                 image="https://res.cloudinary.com/dckwf6med/image/upload/v1662139445/Web%20Dev%20Projects/image_60_1_1_jwn4un.webp"
                 />

<SubTextSection
         title="2.- The one innit"
         paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
         />
          <BlogImage
                 image="https://res.cloudinary.com/dckwf6med/image/upload/v1662139445/Web%20Dev%20Projects/image_60_1_1_jwn4un.webp"
                 />

<SubTextSection
         title="3.- The one innit"
         paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
         />
          <BlogImage
                 image="https://res.cloudinary.com/dckwf6med/image/upload/v1662139445/Web%20Dev%20Projects/image_60_1_1_jwn4un.webp"
                 />
        
        <Footer/></div>
  )
}

export default benefitsOfHIIT