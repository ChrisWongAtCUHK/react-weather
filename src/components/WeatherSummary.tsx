import { capitalizeFirstLetter } from '../utils'
import { WeatherInfo } from '../types'
import './WeatherSummary.scss'

type WeatherSummaryProps = {
  weatherInfo: WeatherInfo | undefined
}

function WeatherSummary({ weatherInfo }: WeatherSummaryProps) {
  return (
    <div className='summary'>
      <div
        style={{
          backgroundImage: `url('./weather-main/${weatherInfo?.weather[0].description}.png')`,
        }}
        className='pic-main'
      ></div>
      <div className='weather'>
        <div className='temp'>{Math.round(weatherInfo?.main?.temp || 0)} °C</div>
        <div className='weather-desc text-block'>
          {capitalizeFirstLetter(weatherInfo?.weather[0].description || '')}
        </div>
      </div>
      <div className='city text-block'>
        {weatherInfo?.name}, {weatherInfo?.sys?.country}
      </div>
      <div className='date text-block'>
        {new Date().toLocaleString('en-EN', {
          weekday: 'short',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </div>
  )
}

export default WeatherSummary
