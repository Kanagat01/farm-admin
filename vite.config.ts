import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  // server: {
  //   https: {
  //     key: "./farm-admin-privateKey.key",
  //     cert: "./farm-admin.crt"
  //   },
  //   host: '0.0.0.0',
  // },
})
