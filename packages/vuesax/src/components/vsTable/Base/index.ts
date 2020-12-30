import './style.sass'
import { App } from "vue";
import component from './VsTable'

component.install = (app: App) => {
  app.component('vs-table', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
