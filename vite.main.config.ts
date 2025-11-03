import { defineConfig } from 'vite';
import { resolve } from 'path';
import { commonAlias } from './vite.common.config';
// https://vitejs.dev/config
export default defineConfig({
   resolve: {
      alias: {
         '@main': resolve(__dirname, 'src/main'),
         ...commonAlias,
      },
   },
   build: {
      rollupOptions: {
         output: {
            // 指定 main 进程输出文件名
            entryFileNames: 'index.js',
         },
      },
   },
});
