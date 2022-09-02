import React from 'react'

function paragraphSection(props) {
  return (
    <div>
            <div className='mt-6 3xl:mt-28 max-w-4xl mx-auto mr-7 ml-7'>
    <p className='sm:ml-7 max-w-3xl mt-3 text-left text-gray-subtext font-extralight'>{props.paragraph}</p>    </div>
    </div>
  )
}

export default paragraphSection