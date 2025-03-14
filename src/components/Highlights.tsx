import { getPressureMm, getTime } from '../utils'
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
        <div className='highlight'>
          <div className='card'>
            <div className='card-title'>Pressure</div>
            <div className='card-pic card-pic--pressure'></div>
            <div className='card-info'>
              <div className='card-centered'>
                <div className='info-main'>
                  <div className='info-main-num'>
                    {getPressureMm(weatherInfo?.main?.pressure)}
                  </div>
                  <div className='info-main-text'>mm</div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-small'>
            <div className='card-small-title'>Feels like</div>
            <div className='card-small-info'>
              <div className='card-small-data'>
                <div className='info-main-num'>
                  {Math.round(weatherInfo?.main?.feels_like)}
                </div>
                <div className='info-main-text'>°C</div>
              </div>
              <div className='card-small-hint'>
                <div className='card-small-pic card-small-pic--margin card-small-pic--pressure'></div>
                <div className='card-small-text'>
                  How hot or cold it really feels
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="highlight">
        <div className="card">
                    <div className="card-title">
                        Sunrise and sunset
                    </div>
                    <div className="card-pic card-pic--sun"></div>
                    <div className="card-info">
                        <div className="states">
                            <div className="state">
                                <div className="state-pic"></div>
                                <div className="state-title">
                                    Sunrise
                                </div>
                                <div className="state-time">
                                    { getTime(weatherInfo?.sys?.sunrise + weatherInfo?.timezone) }
                                </div>
                            </div>
                            <div className="state">
                                <div className="state-pic state-pic--flipped"></div>
                                <div className="state-title">
                                    Sunset
                                </div>
                                <div className="state-time">
                                { getTime(weatherInfo?.sys?.sunset + weatherInfo?.timezone) }
                                </div>
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
