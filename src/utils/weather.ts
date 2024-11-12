import {
  HourlyData,
  Settings,
  WeatherData,
  WidgetData,
} from "../types/weather.types";

function extractWeatherData(
  current: WeatherData,
  hourly: HourlyData,
  settings: Settings
): WidgetData {
  const main = {
    datetime: current.location.localtime,
    city: current.location.name,
  };

  const currentWeather = {
    temperature:
      settings.temprature === "c"
        ? current.current.temp_c
        : current.current.temp_f,
    condition: current.current.condition.text,
    icon: current.current.condition.icon,
    feelsLike:
      settings.temprature === "c"
        ? current.current.feelslike_c
        : current.current.feelslike_f,
    wind:
      settings.measurement === "metric"
        ? current.current.wind_kph
        : current.current.wind_mph,
    humidity: current.current.humidity,
    precipitation:
      settings.measurement === "metric"
        ? current.current.precip_mm
        : current.current.precip_in,
  };

  const hourlyWeather = hourly.forecast.forecastday[0].hour
    .filter((hour) => {
      // filter out the hours that are not in the future
      return new Date(hour.time) > new Date();
    })
    .map((hour) => ({
      time: hour.time,
      temperature: settings.temprature === "c" ? hour.temp_c : hour.temp_f,
      icon: hour.condition.icon,
    }));

  const futureWeather = hourly.forecast.forecastday.map((day) => ({
    date: day.date,
    maxTemp:
      settings.temprature === "c" ? day.day.maxtemp_c : day.day.maxtemp_f,
    minTemp:
      settings.temprature === "c" ? day.day.mintemp_c : day.day.mintemp_f,
    icon: day.day.condition.icon,
  }));

  return {
    main,
    future: futureWeather,
    current: currentWeather,
    hourly: hourlyWeather,
  };
}

export default extractWeatherData;
