import './style.sass'
import { App } from "vue";
import component from './VsTableTd'

component.install = (app: App) => {
  app.component('vs-td', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
