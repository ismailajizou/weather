<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="btn_group">
      <button class="btn" :class="{ btn_active: true }">Hourly Forecast</button>
      <button class="btn" :class="{ btn_active: false }">7-Day Forecast</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
}
</style>
