import './style.sass'
import { App } from "vue";
import component from './VsNavbarItem'

component.install = (app: App) => {
  app.component('vs-navbar-item', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
