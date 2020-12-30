import { App } from "vue";
import './style.sass';
import component from './VsAvatarGroup'

component.install = (app: App) => {
  app.component('vs-avatar-group', component)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
