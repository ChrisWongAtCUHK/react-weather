import { useState } from 'react'

import './App.scss'

function App() {
  const [city, setCity] = useState('Paris')
  const [weatherInfo, setWeatherInfo] = useState(null)
  const [isError, setIsError] = useState(false)
  const [videoSource, setVideoSource] = useState('')

  function setVideoBackground(weatherCondition: string) {
    weatherCondition = weatherCondition.toLowerCase()

    if (weatherCondition === 'clear') {
      setVideoSource(() => './videos/clear sky.mp4')
    } else if (weatherCondition === 'clouds') {
      setVideoSource(() => './videos/clouds.mp4')
    } else if (weatherCondition === 'rain') {
      setVideoSource(() => './videos/rain.mp4')
    } else if (weatherCondition === 'snow') {
      setVideoSource(() => './videos/snow.mp4')
    } else if (
      weatherCondition === 'mist' ||
      weatherCondition === 'smoke' ||
      weatherCondition === 'haze' ||
      weatherCondition === 'dust' ||
      weatherCondition === 'fog' ||
      weatherCondition === 'sand' ||
      weatherCondition === 'ash' ||
      weatherCondition === 'squall' ||
      weatherCondition === 'tornado'
    ) {
      setVideoSource(() => './videos/trees.mp4')
    } else if (weatherCondition === 'thunderstorm') {
      setVideoSource(() => './videos/thunderstorm.mp4')
    } else if (weatherCondition === 'drizzle') {
      setVideoSource(() => './videos/drizzle.mp4')
    } else {
      setVideoSource(() => './videos/sky.mp4')
    }
  }

  async function getWeather() {}

  return <div className='page'></div>
}

export default App
