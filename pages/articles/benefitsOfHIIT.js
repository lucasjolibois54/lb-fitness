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
    <div className='mb-20'>
      <HomeHeader/>
        <Hero
        title="Benefits of High Intensity Interval Training (HIIT)"
        readTime="READ TIME • 3 MIN"
        image="https://res.cloudinary.com/dckwf6med/image/upload/v1662139445/Web%20Dev%20Projects/image_60_1_1_jwn4un.webp"
        />
        
        <TextSection
        title="Why should you do HIIT?"
        paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        />

        <ParagraphSection
                paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
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

<SubTextSection
         title="3.- The one innit"
         paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
         />
        
        <Footer/></div>
  )
}

export default benefitsOfHIIT