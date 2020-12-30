import { App } from "vue";
import './style.sass'

import component from './VsButtonGroup'
component.install = (app: App) => {
  app.component('vs-button-group', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
