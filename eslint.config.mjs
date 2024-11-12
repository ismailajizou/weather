import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vuePlugin from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ),
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,vue}'],
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: vuePlugin.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        parser: tsParser,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        vueFeatures: {
          filter: true,
          interpolationAsNonHTML: false,
          styleCSSVariableInjection: true,
        },
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
