import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';


const promoVideo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
    return (
        <>
            <div id='the-video' className='flex justify-center mt-20 sm:-mt-10'>
                <div className="relative max-w-8xl">
                  
                <div className="mt-4 top-1/2 absolute lg:top-2/3 left-1/2 -translate-x-1/2">
        <a className="text-pink text-2xl py-2 px-10 rounded-full border-gray-stroke border-2 cursor-pointer" onClick={handleOpenModal}>
          Play Video
        </a>
      </div>

      <Modal isOpen={isOpen} onRequestClose={handleCloseModal} contentLabel="Video Modal" className="bg-black bg-opacity-70 fixed inset-0 flex justify-center items-center">
        <div className="max-w-3xl w-full bg-main-dark-bg rounded-lg shadow-lg p-6 relative">
          <button className="absolute top-0 right-0 m-3 text-pink hover:text-red-500" onClick={handleCloseModal}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe className="absolute w-full h-full mt-5 pb-1 rounded-lg" src="https://res.cloudinary.com/dckwf6med/video/upload/v1661535482/Web%20Dev%20Projects/Workout_video_kibdhs.mp4" title="Video Player" allowFullScreen></iframe>
          </div>
        </div>
      </Modal>
                     
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


