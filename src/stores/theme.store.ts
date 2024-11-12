import { defineStore } from "pinia";
import { reactive } from "vue";

const useThemeStore = defineStore("theme", () => {
  const theme = reactive<{ value: "dark" | "light" }>({ value: "light" });
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  const setTheme = (newTheme: "dark" | "light") => {
    theme.value = newTheme;
  };
  return {
    theme,
    toggleTheme,
    setTheme,
  };
});

export default useThemeStore;
