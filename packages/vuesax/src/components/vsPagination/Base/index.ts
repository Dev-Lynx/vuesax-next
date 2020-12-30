import { App } from "vue";
import './style.sass'
import component from './VsPagination'

component.install = (app: App) => {
  app.component('vs-pagination', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
