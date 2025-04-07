import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
console.log("ENV KEY:", process.env.VITE_WEATHER_API_KEY);
