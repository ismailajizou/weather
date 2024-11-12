<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import useWeatherStore from "../stores/weather.store";
import ForecastTabData from "./ForecastTabData.vue";
import { format } from "date-fns";
const { weather } = useWeatherStore();

const tabId = ref<"hourly" | "daily">("hourly");
const data = computed(() => {
  // transform the weather data
  if (tabId.value === "hourly") {
    return (
      weather.value?.hourly.map((hour) => ({
        label: format(new Date(hour.time), "HH:mm"),
        icon: hour.icon,
        mainTemp: Math.round(hour.temperature),
        secondaryTemp: null as number | null,
      })) ?? []
    );
  } else {
    return (
      weather.value?.future.map((day) => ({
        label: format(new Date(day.date), "EEEE"),
        icon: day.icon,
        mainTemp: Math.round(day.maxTemp),
        secondaryTemp: Math.round(day.minTemp),
      })) ?? []
    );
  }
});
</script>

<template>
  <div class="container">
    <div class="btn_group">
      <button
        class="btn"
        :class="{ btn_active: tabId === 'hourly' }"
        @click="tabId = 'hourly'"
      >
        Hourly Forecast
      </button>
      <button
        class="btn"
        :class="{ btn_active: tabId === 'daily' }"
        @click="tabId = 'daily'"
      >
        7-Day Forecast
      </button>
    </div>
    <ForecastTabData :data="data" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
}
</style>
