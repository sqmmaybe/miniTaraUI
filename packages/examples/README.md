# example文件测试使用

# 安装依赖
pnpm install vite @vitejs/plugin-vue -D -w

# 配置vite.config.ts文件
- step1:
    touch vite.config.ts
- step2:
    ```js
        import { defineConfig } from 'vite';
        import vue from '@vitejs/plugin-vue';
        export default defineConfig({
            plugins: [vue()]
        })
    ```
