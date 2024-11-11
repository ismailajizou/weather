<script setup lang="ts">
import { CloudIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="weather_overview_container">
    <div class="weather_icon_container">
      <CloudIcon class="icon" />
      <p class="temp_value">22°C</p>
    </div>

    <div class="weather_description">
      <p class="description">Partially Cloudy</p>
      <p class="feels_like">Feels like 22°C</p>
    </div>
  </div>
</template>

<style scoped>
.weather_overview_container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
}
.weather_icon_container {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.icon {
  color: var(--muted-foreground);
  width: 4.5rem;
  height: 4.5rem;
}
.temp_value {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary);
}

.weather_description {
  text-align: right;
}

.description {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.feels_like {
  color: var(--muted-foreground);
}
</style>
