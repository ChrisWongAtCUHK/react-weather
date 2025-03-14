import React from 'react'

function Humidity({ humidity }) {
  return (
    <section className='section-bottom'>
      <div className='block-bottom'>
        <div className='block-bottom-inner'>
          <div className='block-bottom-pic pic-humidity'></div>
          <div className='block-bottom-texts'>
            <div className='block-bottom-text-block'>
              <div className='block-bottom-text-block-title'>
                Humidity: {humidity} %
              </div>
              <div className='block-bottom-text-block-desc'>
                Humidity is the concentration of water vapor present in the air.
                Water vapor, the gaseous state of water, is generally invisible
                to the human eye.
                <br />
                <br />
                The same amount of water vapor results in higher relative
                humidity in cool air than warm air.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Humidity
