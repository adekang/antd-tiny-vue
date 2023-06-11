import type { App } from 'vue'
import * as components from './components'
export default {
  install(app: App) {
    for (const componentKey in components) {
      const component = (components as any)[componentKey]
      if (component.install) {
        app.use(component)
      }
    }
  }
}
