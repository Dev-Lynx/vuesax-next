import './style.sass'
import { App } from "vue";

import vsCol from './VsCol'
import vsRow from './VsRow'
vsCol.install = (app: App) => {
  app.component('vs-col', vsCol)
}

vsRow.install = (app: App) => {
  app.component('vs-row', vsRow)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   vsCol.install(window.Vue)
//   vsRow.install(window.Vue)
// }

export {
  vsCol,
  vsRow
}
