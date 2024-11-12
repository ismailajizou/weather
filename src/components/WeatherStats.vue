<script setup lang="ts">
import { LuCloudRain, LuGauge } from "vue-icons-plus/lu";
import { RiDropLine, RiWindyLine } from "vue-icons-plus/ri";
import useWeatherStore from "../stores/weather.store";

const { weather } = useWeatherStore();
</script>

<template>
  <div class="weather_stats_container">
    <div class="stat_container">
      <div class="description">
        <RiDropLine class="description_icon" />
        <p class="description_text">Humidity</p>
      </div>
      <p class="stat_value">{{ weather.value?.current.humidity }} %</p>
    </div>
    <div class="stat_container">
      <div class="description">
        <LuCloudRain class="description_icon" />
        <p class="description_text">Precipitation</p>
      </div>
      <p class="stat_value">
        {{ weather.value?.current.precipitation[weather.settings.measurement] }}
        {{ weather.settings.measurement === "metric" ? "mm" : "in" }}
      </p>
    </div>
    <div class="stat_container">
      <div class="description">
        <RiWindyLine class="description_icon" />
        <p class="description_text">Wind</p>
      </div>
      <p class="stat_value">
        {{ weather.value?.current.wind[weather.settings.measurement] }}
        {{ weather.settings.measurement === "metric" ? "km/h" : "mph" }}
      </p>
    </div>

    <div class="stat_container">
      <div class="description">
        <LuGauge class="description_icon" />
        <p class="description_text">AQI</p>
      </div>
      <p class="stat_value">141</p>
    </div>
  </div>
</template>

<style scoped>
.weather_stats_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 4rem;
  margin: 1rem 0;
}

.stat_container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.description {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.description_icon {
  color: var(--icons-accent);
  width: 1.5rem;
  height: 1.5rem;
}

.description_text {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--primary);
}

.stat_value {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary);
}
</style>
