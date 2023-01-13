import { defineComponent } from "vue";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts';


export default defineComponent({
    build: {
        target: 'modules',
        outDir: "es",
        minify: false,
        rollupOptions: {
            external: ['vue', /\.less/],
            input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    // preserveModules: true,
                    dir: 'es',
                    // preserveModulesRoot: 'src'
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    //让打包目录和我们目录对应
                    // preserveModules: true,
                    //配置打包根目录
                    dir: 'lib',
                    // preserveModulesRoot: 'src'
                }
            ],
            lib: {
                entry: './index.ts',
                formats: ['es', 'cjs']
            }
        }
    },
    plugins: [
        vue(),
        dts({
            tsConfigFilePath: '../../../tsconfig.json'
        }),
        dts({
            outputDir:'lib',
            tsConfigFilePath: '../../../tsconfig.json'
        }),
        {
            name: 'style',
            generateBundle(config: any, bundle: any) {
                const keys = Object.keys(bundle);
                for (const key of keys) {
                    const bundler: any = bundle[key as any];
                    //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
                    this.emitFile({
                        type: 'asset',
                        fileName: key,//文件名名不变
                        source: bundler.code.replace(/\.less/g, '.css')
                    })
                }
            }
        }
    ],
})
