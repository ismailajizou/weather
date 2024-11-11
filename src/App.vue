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
  background: linear-gradient(
      0deg,
      var(--secondary-text, #0e121b),
      var(--secondary-text, #0e121b)
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0) 100%
    );
}
</style>
