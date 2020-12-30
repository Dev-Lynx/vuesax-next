import { App } from "vue"
import './style.sass'
import component from './VsCardGroup'

component.install = (app: App) => {
  app.component('vs-card-group', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
