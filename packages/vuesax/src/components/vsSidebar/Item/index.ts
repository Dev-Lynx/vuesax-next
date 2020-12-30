import './style.sass'
import { App } from "vue";
import component from './VsSidebarItem'

component.install = (app: App) => {
  app.component('vs-sidebar-item', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
