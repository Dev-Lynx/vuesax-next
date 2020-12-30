import { App } from "vue";
import './style.sass';
import component from './VsNavbarGroup'

component.install = (app: App) => {
  app.component('vs-navbar-group', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
