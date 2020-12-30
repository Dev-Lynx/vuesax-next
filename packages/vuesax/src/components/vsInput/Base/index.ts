import { App } from "vue"
import './style.sass'
import component from './VsInput'

component.install = (app: App) => {
  app.component('vs-input', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
