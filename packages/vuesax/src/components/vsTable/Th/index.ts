import './style.sass'
import { App } from "vue";
import component from './VsTableTh'

component.install = (app: App) => {
  app.component('vs-th', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
