<script setup lang="ts">
import useWeatherStore from '../stores/weather.store'
import SettingsPopup from './SettingsPopup.vue'
import { format } from 'date-fns'
const { weather } = useWeatherStore()
</script>

<template>
  <div class="city_info_container">
    <div class="city_details_container">
      <h2 class="city_name">{{ weather.value?.main.city }}</h2>
      <div class="date_time_info">
        <p class="date">
          {{
            format(
              new Date(weather.value?.main.datetime ?? new Date()),
              'EEEE, MMMM d, yyyy',
            )
          }}
        </p>
        <p class="time">
          {{
            format(
              new Date(weather.value?.main.datetime ?? new Date()),
              'h:mm a',
            )
          }}
        </p>
      </div>
    </div>

    <SettingsPopup />
  </div>
</template>

<style scoped>
.city_info_container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: flex-start;
}

.city_name {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-text);
  margin-bottom: 0.5rem;
}

.date_time_info {
  color: var(--secondary-text);
}

.date {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.time {
  font-size: 0.9rem;
  font-weight: 600;
}
</style>
