<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="weather_stats_container">
    <div class="stat_container">
      <div class="description">
        <XMarkIcon class="description_icon" />
        <p class="description_text">Humidity</p>
      </div>
      <p class="stat_value">40%</p>
    </div>
    <div class="stat_container">
      <div class="description">
        <XMarkIcon class="description_icon" />
        <p class="description_text">Precipitation</p>
      </div>
      <p class="stat_value">15%</p>
    </div>
    <div class="stat_container">
      <div class="description">
        <XMarkIcon class="description_icon" />
        <p class="description_text">Wind</p>
      </div>
      <p class="stat_value">1 km/h</p>
    </div>

    <div class="stat_container">
      <div class="description">
        <XMarkIcon class="description_icon" />
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
}

.stat_container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.description {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.description_icon {
  color: var(--muted-foreground);
  width: 1.5rem;
  height: 1.5rem;
}

.description_text {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--primary);
}

.stat_value {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary);
}
</style>
