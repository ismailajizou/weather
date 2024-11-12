import { defineStore } from "pinia";
import { WeatherData } from "../types/weather.types";
import { reactive, ref } from "vue";

interface WeatherState {
  isLoading: boolean;
  isError: boolean;
  value: WeatherData | null;
}

const useWeatherStore = defineStore("weather", () => {
  //   init the weather state with an empty object
  const weather = reactive<WeatherState>({
    value: null,
    isLoading: false,
    isError: false,
  });

  function setWeather(newWeather: WeatherData) {
    weather.value = newWeather;
  }

  const setIsLoading = (value: boolean) => {
    weather.isLoading = value;
  };

  const setIsError = (value: boolean) => {
    weather.isError = value;
  };

  return {
    weather,
    setWeather,
    setIsLoading,
    setIsError,
  };
});

export default useWeatherStore;
