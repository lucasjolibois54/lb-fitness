import React from 'react'

function paragraphSection(props) {
  return (
    <div>
            <div className='mt-6 3xl:mt-28 max-w-4xl mx-auto'>
    <p className='sm:ml-7 max-w-3xl mt-3 text-center sm:text-left text-gray-subtext font-extralight'>{props.paragraph}</p>    </div>
    </div>
  )
}

export default paragraphSection