import { App } from "vue";
import './style.sass'
import component from './component'

component.install = (app: App) => {
  app.component('vs-pagination', component)
}



export default component
