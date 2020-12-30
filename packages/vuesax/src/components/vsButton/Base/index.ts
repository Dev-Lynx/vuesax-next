import { App } from "vue";
import './style.sass';

import component from './VsButton';
component.install = (app: App) => {
  app.component('vs-button', component);
}

// if (typeof window !== 'undefined' && window.Vue) {
//   component.install(window.Vue)
// }

export default component
