import { defineStore } from "pinia";
import { reactive } from "vue";
import { WidgetData } from "../types/weather.types";

interface WeatherState {
  isLoading: boolean;
  isError: boolean;
  value: WidgetData | null;
  settings: {
    measurement: "metric" | "imperial";
    temprature: "c" | "f";
  };
}

const useWeatherStore = defineStore("weather", () => {
  //   init the weather state with an empty object
  const weather = reactive<WeatherState>({
    settings: {
      measurement: "metric",
      temprature: "c",
    },
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

  const setSettingsMeasurement = (value: "metric" | "imperial") => {
    weather.settings.measurement = value;
  }

  const setSettingsTemprature = (value: "c" | "f") => {
    weather.settings.temprature = value;
  }

  return {
    weather,
    setWeather,
    setIsLoading,
    setIsError,
    setSettingsMeasurement,
    setSettingsTemprature,
  };
});

export default useWeatherStore;
