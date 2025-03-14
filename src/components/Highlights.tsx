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
          <div className='card-small'>
            <div className='card-small-title'>Wind gusts</div>
            <div className='card-small-info'>
              <div v-if='weatherInfo?.wind?.gust' className='card-small-data'>
                <div className='info-main-num'>
                  {Math.round(weatherInfo?.wind?.gust)}
                </div>
                <div className='info-main-text'>m/s</div>
              </div>
              <div className='card-small-hint'>
                <div className='card-small-pic card-small-pic--wind'></div>
                <div className='card-small-text text-egorova'>
                  Learn&nbsp;
                  <a
                    href='https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5'
                    target='_blank'
                  >
                    more
                  </a>
                  &nbsp;about gusts
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
