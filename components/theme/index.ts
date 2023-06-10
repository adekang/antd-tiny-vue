import { createTheme, useCacheToken } from '@antd-tiny-vue/cssinjs'
import { computed } from 'vue'

export interface ThemeToken {
  primaryColor: string
  primaryColorHover: string
}

export const defaultTheme: ThemeToken = {
  primaryColor: '#1890ff',
  primaryColorHover: '#40a9ff'
}

function derivative(theme: ThemeToken) {
  return {
    ...theme
  }
}

const theme = createTheme(derivative)

export const useToken = () => {
  const mergeTheme = computed(() => theme)

  const cacheToken = useCacheToken(
    mergeTheme,
    computed(() => [defaultTheme]),
    computed(() => ({
      salt: 'true'
    }))
  )

  return [
    mergeTheme,
    computed(() => cacheToken.value[0]),
    computed(() => cacheToken.value[1])
  ]
}
