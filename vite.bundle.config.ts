import { defineConfig } from 'vite'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsxPlugin()],
  build: {
    lib: {
      //   入口
      entry: 'components/index.ts',
      name: 'antd-tiny-vue',
      fileName: () => 'antd.js',
      formats: ['umd']
    }
  }
})
