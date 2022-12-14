import React from 'react'


const promoVideo = () => {
    return (
        <>
            <div id='the-video' className='flex justify-center mt-20 sm:-mt-10'>
                <div className="relative max-w-8xl">
                  
                <div className="mt-4 top-1/2 absolute lg:top-2/3 left-1/2 -translate-x-1/2">
                    <a  target="blank" href='https://res.cloudinary.com/dckwf6med/video/upload/v1661535482/Web%20Dev%20Projects/Workout_video_kibdhs.mp4' className="text-pink text-2xl py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer">
                        Play Video
                    </a></div>
                     
                    <img alt="Image"  className='w-full' src="https://res.cloudinary.com/dckwf6med/image/upload/v1661524868/Web%20Dev%20Projects/Group_91_2_cvdd5n.png" />
                    {/* <video poster={"https://res.cloudinary.com/dckwf6med/image/upload/v1661524868/Web%20Dev%20Projects/Group_91_2_cvdd5n.png"} width="100%" src="https://res.cloudinary.com/dckwf6med/video/upload/v1653573782/Portfolio/Lucas_Jolibois_Portfolio_Video_k1dup2.mp4" 
         css={`
         height: 95vh;
         width: 100vw;
       `}>
          Your browser does not support the video tag.
        </video> */}

                    {/* <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
                <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
                <h3 className="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}
                </div>
            </div>
        </>
    )
}

export default promoVideo

/*https://next-with.moxy.tech/docs/recipes/video-player/*/


