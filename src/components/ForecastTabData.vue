<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  data: {
    label: string;
    icon: string;
    mainTemp: number;
    secondaryTemp: number | null;
  }[];
}>();
</script>

<template>
  <div class="forecast_container">
    <div class="forecast_card" v-for="hour in props.data">
      <p class="time">{{ hour.label }}</p>
      <img :src="hour.icon" alt="cloudy" class="icon" />
      <p class="main_temp">{{ hour.mainTemp }}°</p>
      <p class="secondary_temp" v-if="hour.secondaryTemp">{{ hour.secondaryTemp }}°</p>
    </div>
  </div>
</template>

<style scoped>
.forecast_container {
  position: relative;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
}
/* hide scrollbar */
.forecast_container::-webkit-scrollbar {
  display: none;
}


.forecast_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  padding: 1rem;
  border-radius: 0.5rem;
}

.time {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-text);
}

.icon {
  width: 2rem;
  height: 2rem;
}

.main_temp {
  font-size: .9rem;
  font-weight: 700;
  color: var(--primary-text);
}

.secondary_temp {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--secondary-text);
}
</style>
