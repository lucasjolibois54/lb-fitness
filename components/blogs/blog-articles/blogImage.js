import React from 'react'

function blogImage(props) {
  return (
    <>
    <div className='max-w-3xl mx-auto'>
    <div className='ml-0 mr-7'>
                    <img className='w-screen p-7 sm:p-0 sm:mt-7' src={props.image}/>
    </div></div>
    </>
  )
}

export default blogImage