import './style.sass'
import { App } from "vue";
import component from './VsSelectOption'

component.install = (app: App) => {
  app.component('vs-option', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
