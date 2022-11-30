import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://andresGarcia90.github.io/vite-react-rick-and-morty/",
  plugins: [react()]
})
