import './style.sass'
import { App } from "vue";
import component from './VsSelect'

component.install = (app: App) => {
  app.component('vs-select', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
