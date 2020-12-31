import './style.sass'
import { App } from "vue";
import component from './component'

component.install = (app: App) => {
  app.component('vs-sidebar-group', component)
}



export default component
