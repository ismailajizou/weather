<script setup lang="ts">
import axios, { AxiosResponse } from "axios";
import WeatherWidget from "./components/WeatherWidget.vue";
import useWeatherStore from "./stores/weather.store";
import { getCurrentLocation } from "./utils/location";
import { onMounted } from "vue";
import { HourlyData, WeatherData } from "./types/weather.types";
import extractWeatherData from "./utils/weather";

const { weather, setWeather, setIsError, setIsLoading } = useWeatherStore();
const BASE_URL = "https://api.weatherapi.com/v1";

onMounted(() => {
  setIsLoading(true);
  setIsError(false);
  // get the geolocation of the user
  getCurrentLocation().then((position) => {
    const { lon, lat } = position;
    console.log(lon, lat);
    Promise.all([
      axios.get<WeatherData>(
        `${BASE_URL}/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${lat},${lon}`
      ),
      axios.get<HourlyData>(
        `${BASE_URL}/forecast.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${lat},${lon}&days=1`
      ),
    ])
      .then(([{ data: weather }, { data: hourly }]) => {
        setWeather(
          extractWeatherData(weather, hourly, {
            measurement: "metric",
            temprature: "c",
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.log(error.response.data.message);
      });
  });
});
</script>

<template>
  <div class="container">
    <div class="" v-if="weather.isLoading">Loading . . .</div>
    <div class="" v-else-if="weather.isError">Error fetching data</div>
    <WeatherWidget v-else />
  </div>
</template>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
      0deg,
      var(--secondary-text, #0e121b),
      var(--secondary-text, #0e121b)
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0) 100%
    );
}
</style>
