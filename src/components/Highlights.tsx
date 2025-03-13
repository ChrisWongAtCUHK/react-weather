import './Highlights.scss'

function Highlights({ weatherInfo }) {
  return (
    <div className='section highlights'>
      <div className='title'>Today's Highlights</div>
      <div className='highlights-wrapper'>
        <div className='highlight'>
          <div className='card'>
            <div className='card-title'>Wind</div>
            <div className='card-pic card-pic--wind'></div>
            <div className='card-info'>
              <div className='card-justify'>
                <div className='info-main'>
                  <div className='info-main-num'>
                    {weatherInfo?.wind?.speed}
                  </div>
                  <div className='info-main-text'>m/s</div>
                </div>
                <div className='info-main'>
                  <div className='info-main-num'>{weatherInfo?.wind?.deg}</div>
                  <div className='info-main-text'>deg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
