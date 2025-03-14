import { KeyboardEvent, useCallback, useEffect, useState } from 'react'

import './App.scss'
import { WeatherInfo } from './types'
import { capitalizeFirstLetter } from './utils'
import WeatherSummary from './components/WeatherSummary'
import Highlights from './components/Highlights'
import Coords from './components/Coords'
import Humidity from './components/Humidity'

function App() {
  const [city, setCity] = useState('Paris')
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>()
  const [error, setError] = useState<unknown>(null)
  const [videoSource, setVideoSource] = useState<string>(
    './videos/clear sky.mp4'
  )

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

  const getWeather = useCallback(async (c = 'Paris') => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      const data = await response.json()
      setWeatherInfo(() => data)

      setVideoBackground(data.weather[0].main)
    } catch (err: unknown) {
      setError(() => err)
    }
  }, [])

  function handleChange(e: { target: { value: string } }) {
    setCity(() => e.target.value)
  }

  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      getWeather(city)
      
    }
  }
  useEffect(() => {
    getWeather()
  }, [getWeather])

  useEffect(() => {
    console.log(weatherInfo)
  }, [weatherInfo])

  return (
    <div className='page'>
      <video
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline
        className='video-background'
      ></video>
      <main className='main'>
        <div className='container'>
          <div className='laptop'>
            <div className='sections'>
              <section
                className={[
                  'section',
                  'section-left',
                  error ? 'section-error' : '',
                ].join(' ')}
              >
                <div className='info'>
                  <div className='city-inner'>
                    <input
                      type='text'
                      value={city}
                      className='search'
                      onChange={handleChange}
                      onKeyUp={handleKeyUp}
                    />
                  </div>
                  <WeatherSummary weatherInfo={weatherInfo} />
                  {error ? (
                    <div className='error'>
                      <div className='error-title'>
                        Oops! Something went wrong
                      </div>
                      <div
                        v-if='weatherInfo?.message'
                        className='error-message'
                      >
                        {capitalizeFirstLetter(weatherInfo?.message || '')}
                      </div>
                    </div>
                  ) : null}
                </div>
              </section>
              {!error ? (
                <section className='section section-right'>
                  <Highlights weatherInfo={weatherInfo} />
                </section>
              ) : null}
            </div>
            {!error ? <div className='sections'>
              <Coords coord={weatherInfo?.coord} />
              <Humidity humidity={weatherInfo?.main.humidity} />
            </div> : null}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
