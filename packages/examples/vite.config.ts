import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    // build: {
    //     terserOptions: {
    //         compress: {
    //             //生产环境时移除console
    //             drop_console: true,
    //             drop_debugger: true,
    //         },
    //     },
    //     rollupOptions: {
    //         output: {
    //             chunkFileNames: 'js/[name]-[hash].js',
    //             entryFileNames: 'js/[name]-[hash].js',
    //             assetFileNames: '[ext]/[name]-[hash].[ext]',
    //         },
    //     },
    // }
});