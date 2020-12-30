import { App } from "vue";
import './style.sass';
import component from './VsAlert';

component.install = (app: App) => {
  app.component('vs-alert', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
