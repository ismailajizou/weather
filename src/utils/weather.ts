import { HourlyData, WeatherData, WidgetData } from '../types/weather.types'

function extractWeatherData(
  current: WeatherData,
  hourly: HourlyData,
  aqi: number,
): WidgetData {
  const main = {
    datetime: current.location.localtime,
    city: current.location.name,
  }

  const currentWeather = {
    temperature: {
      c: current.current.temp_c,
      f: current.current.temp_f,
    },
    condition: current.current.condition.text,
    icon: current.current.condition.icon,
    feelsLike: {
      c: current.current.feelslike_c,
      f: current.current.feelslike_f,
    },
    wind: {
      imperial: current.current.wind_mph,
      metric: current.current.wind_kph,
    },
    humidity: current.current.humidity,
    precipitation: {
      imperial: current.current.precip_in,
      metric: current.current.precip_mm,
    },
  }

  const hourlyWeather = hourly.forecast.forecastday[0].hour
    .filter((hour) => {
      // filter out the hours that are not in the future
      return new Date(hour.time) > new Date()
    })
    .map((hour) => ({
      time: hour.time,
      temperature: {
        c: hour.temp_c,
        f: hour.temp_f,
      },
      icon: hour.condition.icon,
    }))

  const futureWeather = hourly.forecast.forecastday.map((day) => ({
    date: day.date,
    maxTemp: { c: day.day.maxtemp_c, f: day.day.maxtemp_f },
    minTemp: { c: day.day.mintemp_c, f: day.day.mintemp_f },
    icon: day.day.condition.icon,
  }))

  return {
    main,
    aqi,
    future: futureWeather,
    current: currentWeather,
    hourly: hourlyWeather,
  }
}

export default extractWeatherData
