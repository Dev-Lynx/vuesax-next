import { App } from "vue"
import './style.sass'
import component from './VsNavbar'

component.install = (app: App) => {
  app.component('vs-navbar', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
