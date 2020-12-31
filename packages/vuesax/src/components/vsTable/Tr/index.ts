import './style.sass'
import { App } from "vue";
import component from './component'

component.install = (app: App) => {
  app.component('vs-tr', component)
}



export default component
