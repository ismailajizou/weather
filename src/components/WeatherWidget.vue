<script setup lang="ts">
import AQIProgress from './AQIProgress.vue'
import CityInfo from './CityInfo.vue'
import ForecastTabs from './ForecastTabs.vue'
import WeatherOverview from './WeatherOverview.vue'
import WeatherStats from './WeatherStats.vue'
</script>

<template>
  <div class="widget">
    <CityInfo />
    <WeatherOverview />
    <WeatherStats />
    <AQIProgress />
    <ForecastTabs />
  </div>
</template>

<style scoped>
.widget {
  max-width: 42rem;
  width: 100%;
  background-color: var(--primary-background);
  border: 1px solid var(--border);
  border-radius: 25px;
  margin: 0 auto;
  padding: 1.5rem 1.75rem;
}
</style>
