import { App } from "vue"
import './style.sass'
import component from './VsCheckbox'

component.install = (app: App) => {
  app.component('vs-checkbox', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
