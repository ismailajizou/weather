<script setup lang="ts">
import SettingsPopup from "./SettingsPopup.vue";
</script>

<template>
  <div class="city_info_container">
    <div class="city_details_container">
      <h2 class="city_name">Casablanca</h2>
      <div class="date_time_info">
        <p class="date">Friday, November 8, 2024</p>
        <p class="time">9:09 PM</p>
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
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
}

.date_time_info {
  color: var(--secondary-text);
}
</style>
