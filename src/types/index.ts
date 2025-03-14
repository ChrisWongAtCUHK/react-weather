export interface Coord {
  lon: number
  lat: number
}

interface Weather {
  description: string
}

export interface WeatherInfo {
  name: string
  message: string
  coord: Coord
  main: {
    humidity: number
    pressure: number
    feels_like: number
    temp: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  sys: {
    sunrise: number
    sunset: number
    country: string
  }
  timezone: number
  clouds: {
    all: number
  }
  weather: Weather[]
}
