import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    // Другие настройки сборки...
    rollupOptions: {
      output: {
        // Создание директории для шрифтов в выходных файлах сборки
        assetFileNames: 'Assets/[name].[ext]',
      },
    },
  },
});
