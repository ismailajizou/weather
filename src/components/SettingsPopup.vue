<script setup lang="ts">
import { HiCog6Tooth } from 'vue-icons-plus/hi2'

import { ref } from 'vue'
import useWeatherStore from '../stores/weather.store'
import useThemeStore from '../stores/theme.store'

const { weather, setSettingsMeasurement, setSettingsTemprature } =
  useWeatherStore()

const { theme, setTheme } = useThemeStore()

const isPopupOpen = ref(false)

const togglePopup = () => {
  isPopupOpen.value = !isPopupOpen.value
}
</script>

<template>
  <div class="container">
    <button class="trigger_btn" @click="togglePopup">
      <HiCog6Tooth class="icon" />
    </button>
    <div
      class="popup_container"
      :style="{ display: isPopupOpen ? 'flex' : 'none' }"
    >
      <div class="setting">
        <p class="setting_title">Theme</p>
        <div class="btn_group">
          <button
            class="btn"
            :class="{ btn_active: theme.value === 'light' }"
            @click="setTheme('light')"
          >
            Light
          </button>
          <button
            class="btn"
            :class="{ btn_active: theme.value === 'dark' }"
            @click="setTheme('dark')"
          >
            Dark
          </button>
        </div>
      </div>
      <div class="setting">
        <p class="setting_title">Temprature</p>
        <div class="btn_group">
          <button
            class="btn"
            :class="{ btn_active: weather.settings.temprature === 'c' }"
            @click="setSettingsTemprature('c')"
          >
            °C
          </button>
          <button
            class="btn"
            :class="{ btn_active: weather.settings.temprature === 'f' }"
            @click="setSettingsTemprature('f')"
          >
            °F
          </button>
        </div>
      </div>
      <div class="setting">
        <p class="setting_title">Measurements</p>
        <div class="btn_group">
          <button
            class="btn"
            :class="{ btn_active: weather.settings.measurement === 'metric' }"
            @click="setSettingsMeasurement('metric')"
          >
            Metric
          </button>
          <button
            class="btn"
            :class="{ btn_active: weather.settings.measurement === 'imperial' }"
            @click="setSettingsMeasurement('imperial')"
          >
            Imperial
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  font-size: 0.8rem;
  color: var(--primary-text);
}
.trigger_btn {
  background-color: var(--primary-background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.trigger_btn:hover {
  background-color: var(--secondary-background);
}

.trigger_btn .icon {
  color: var(--secondary-text);
  width: 1.2rem;
  height: 1.2rem;
}

.popup_container {
  position: absolute;
  flex-direction: column;
  gap: 0.5rem;
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
  margin-bottom: 0.3rem;
}
</style>
