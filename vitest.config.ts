/// <reference types="vitest" />

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],

  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      all: true,
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
