import { defineConfig } from 'vite'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vueJsxPlugin(),
    //   生成dts文件 类型文件
    dts({
      outputDir: ['es', 'lib'],
      include: ['components/**/*.ts', 'components/**/*.tsx']
    })
  ],
  build: {
    rollupOptions: {
      // 忽略打包的模块 dependencies的都可以忽略
      external: [
        '@ant-design/colors',
        /^@ant-design\/icons-vue/,
        '@antd-tiny-vue/cssinjs',
        '@ctrl/tinycolor',
        '@v-c/utils',
        '@vueuse/core',
        'vue'
      ],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          // 保留文件夹结构
          preserveModules: true,
          preserveModulesRoot: 'components'
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'components',
          exports: 'named'
        }
      ]
    },
    lib: {
      //   入口
      entry: 'components/index.ts',
      formats: ['es', 'cjs']
    }
  }
})
