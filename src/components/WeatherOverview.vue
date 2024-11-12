<script setup lang="ts">
import useWeatherStore from '../stores/weather.store'

const { weather } = useWeatherStore()
</script>

<template>
  <div class="weather_overview_container">
    <div class="weather_icon_container">
      <img :src="weather.value?.current.icon" alt="weather icon" class="icon" />
      <p class="temp_value">
        {{
          Math.round(
            weather.value?.current.temperature[weather.settings.temprature] ??
              0,
          )
        }}°
      </p>
    </div>

    <div class="weather_description">
      <p class="description">{{ weather.value?.current.condition }}</p>
      <p class="feels_like">
        Feels like
        {{
          Math.round(
            weather.value?.current.feelsLike[weather.settings.temprature] ?? 0,
          )
        }}°
      </p>
    </div>
  </div>
</template>

<style scoped>
.weather_overview_container {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  align-items: center;
}
.weather_icon_container {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.icon {
  color: var(--secondary-text);
  width: 4.5rem;
  height: 4.5rem;
}
.temp_value {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-text);
}

.weather_description {
  text-align: right;
}

.description {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-text);
  margin-bottom: 0.5rem;
}

.feels_like {
  color: var(--secondary-text);
  font-weight: 500;
}
</style>
