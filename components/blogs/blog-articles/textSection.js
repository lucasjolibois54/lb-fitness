import React from 'react'

function textSection(props) {
  return (
    <div>
            <div className='mt-20 3xl:mt-28 max-w-4xl mx-auto mr-7 ml-7'>
    <h1 className='sm:ml-7 max-w-4xl text-left !leading-tight mt-4 text-white text-4xl xsm:text-3xl sm:text-4xl md:6xl md-lg:text-5xl lg:text-6xl font-medium '>{props.title}</h1>
    <p className='sm:ml-7 sm:mt-8 max-w-3xl mt-6 text-left text-gray-subtext font-extralight'>{props.paragraph}</p>    </div>
    </div>
  )
}

export default textSection