import './style.sass'
import { App } from "vue";
import component from './VsSwitch'

component.install = (app: App) => {
  app.component('vs-switch', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
