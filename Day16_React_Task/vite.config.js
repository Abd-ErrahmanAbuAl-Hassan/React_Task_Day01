import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React_Task_Day01/', // ⬅️ اسم الريبو هنا
  plugins: [react()],
});
