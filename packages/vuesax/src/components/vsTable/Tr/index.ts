import './style.sass'
import { App } from "vue";
import component from './VsTableTr'

component.install = (app: App) => {
  app.component('vs-tr', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
