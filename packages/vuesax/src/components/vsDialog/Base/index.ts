import { App } from "vue"
import './style.sass'
import component from './VsDialog'

component.install = (app: App) => {
  app.component('vs-dialog', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
