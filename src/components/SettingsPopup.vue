<script setup lang="ts">
import { Cog6ToothIcon } from "@heroicons/vue/24/solid";

import { ref } from "vue";

const isPopupOpen = ref(false);

const togglePopup = () => {
  isPopupOpen.value = !isPopupOpen.value;
};
</script>

<template>
  <div class="container">
    <button class="trigger_btn" @click="togglePopup">
      <Cog6ToothIcon class="icon" />
    </button>
    <div
      class="popup_container"
      :style="{ display: isPopupOpen ? 'flex' : 'none' }"
    >
      <div class="setting">
        <p class="setting_title">Temprature</p>
        <div class="btn_group">
          <button class="btn" :class="{'btn_active': true}">°C</button>
          <button class="btn" :class="{'btn_active': false}">°F</button>
        </div>
      </div>
      <div class="setting">
        <p class="setting_title">Measurements</p>
        <div class="btn_group">
          <button class="btn" :class="{'btn_active': true}">Metrics</button>
          <button class="btn" :class="{'btn_active': false}">Imperial</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  font-size: .8rem;
}
.trigger_btn {
  background-color: var(--primary-background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.trigger_btn .icon {
  color: var(--secondary-text);
  width: 1rem;
  height: 1rem;
}

.popup_container {
  position: absolute;
  flex-direction: column;
  gap: .5rem;
  top: 2.5rem;
  right: 0;
  background-color: var(--primary-background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  width: 16rem;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.setting_title {
  margin-bottom: .3rem;
}

</style>
