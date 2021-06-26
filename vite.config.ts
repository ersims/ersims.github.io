import { defineConfig } from 'vite';
import { resolve } from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    // TODO: Remove once https://github.com/vitejs/vite/pull/3588 lands
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
