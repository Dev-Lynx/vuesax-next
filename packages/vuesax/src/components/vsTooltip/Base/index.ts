import './style.sass'
import { App } from "vue";
import component from './VsTooltip'

component.install = (app: App) => {
  app.component('vs-tooltip', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
