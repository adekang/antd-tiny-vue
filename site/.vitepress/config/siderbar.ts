import type { DefaultTheme } from 'vitepress'

export const getSidebar = (): DefaultTheme.Sidebar => {
  return {
    '/components/': [
      {
        text: 'Button',
        link: '/components/button/'
      }
    ]
  }
}
