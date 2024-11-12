<script setup lang="ts">
import { BsFillInfoCircleFill } from "vue-icons-plus/bs";
import useWeatherStore from "../stores/weather.store";

const { weather } = useWeatherStore();
</script>

<template>
  <div class="container">
    <div class="description">
      <p class="label">AQI</p>
      <div class="value_container">
        <p class="value">300</p>
        <div class="popover_container">
          <BsFillInfoCircleFill class="icon" />
          <div class="popover">
            <p class="popover-text">300+ AQI is considered hazardous.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="progress">
      <!-- AQI (Air Quality Index) is a value from 0 to 500 -->
      <div class="progress-bar">
        <div
          class="progress-bar-fill"
          :style="{ width: `${((weather.value?.aqi ?? 0) / 300) * 100}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 2rem 0;
  color: var(--primary-text);
}
.description {
  display: flex;
  justify-content: space-between;
}

.value_container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.popover_container {
  position: relative;
}

.popover {
  position: absolute;
  top: -2.5rem;
  right: -1rem;
  background-color: var(--primary-background);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: none;
  font-size: 0.7rem;
  width: max-content;
  z-index: 20;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.popover::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 1rem;
  border: 0.5rem solid transparent;
  border-top-color: var(--primary-background);
}

.popover_container:hover .popover {
  display: block;
}

.icon {
  color: var(--disabled);
  width: 1rem;
  height: 1rem;
}

.progress {
  margin-top: 1rem;
  background-color: var(--disabled);
  border: 1px solid var(--border);
  border-radius: 3rem;
  overflow: hidden;
}

.progress-bar {
  width: 100%;
  height: 0.3rem;
  background-color: var(--disabled);
}

.progress-bar-fill {
  height: 100%;
  background-color: var(--progress-fill);
  border-radius: 0 3rem 3rem 0;
}
</style>
