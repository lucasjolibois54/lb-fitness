import React from 'react'

function textSlider(props) {
  return (
    <div>
                    <div className="mt-20 sm:pb-12">

<div className="whitespace-nowrap">
    <p className="overscroll-on-text-over-x-axis flex marqueeStyle text-white mt-7 sm:mt-0 text-6xl xsm:text-4xl sm:text-6xl md-lg:text-7xl lg:text-8xl font-bold stroke-title">{props.text}
    </p>
</div>

</div>
    </div>
  )
}

export default textSlider