import './style.sass'
import { App } from "vue";
import component from './VsRadio'

component.install = (app: App) => {
  app.component('vs-radio', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
