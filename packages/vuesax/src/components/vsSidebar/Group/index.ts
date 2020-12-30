import './style.sass'
import { App } from "vue";
import component from './vsSidebarGroup'

component.install = (app: App) => {
  app.component('vs-sidebar-group', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
