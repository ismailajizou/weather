<script setup lang="ts">
import AQIProgress from "./AQIProgress.vue";
import CityInfo from "./CityInfo.vue";
import WeatherOverview from "./WeatherOverview.vue";
import WeatherStats from "./WeatherStats.vue";
</script>

<template>
  <div class="widget">
    <CityInfo />
    <WeatherOverview />
    <WeatherStats />
    <AQIProgress />
  </div>
</template>

<style scoped>
.widget {
  max-width: 40rem;
  width: 100%;
  background-color: var(--background-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin: 0 auto;
  padding: 1.5rem 1.75rem;
}
</style>
