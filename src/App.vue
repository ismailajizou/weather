<script setup lang="ts">
import WeatherWidget from "./components/WeatherWidget.vue";
</script>

<template>
  <div class="container">
    <WeatherWidget />
  </div>
</template>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-primary);
}
</style>
