import { defineStore } from "pinia";
import { reactive } from "vue";
import { WidgetData } from "../types/weather.types";

interface WeatherState {
  isLoading: boolean;
  isError: boolean;
  value: WidgetData | null;
}

const useWeatherStore = defineStore("weather", () => {
  //   init the weather state with an empty object
  const weather = reactive<WeatherState>({
    value: null,
    isLoading: false,
    isError: false,
  });

  function setWeather(newWeather: WidgetData) {
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
