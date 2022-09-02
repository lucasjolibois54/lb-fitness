import React from 'react'

function blogImage(props) {
  return (
    <>
    <div className='max-w-3xl mx-auto'>
    <div className='sm:pl-12 md-blog-img:pl-7 md-blog-img:pr-7 lg-blog-img:pl-4 lg-blog-img:pr-4 md-lg-bigger:pl-0 md-lg-bigger:pr-0 sm:mr-12'>
                    <img className='w-screen p-7 sm:p-0 sm:mt-7' src={props.image}/>
    </div></div>
    </>
  )
}

export default blogImage