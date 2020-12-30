import { App } from "vue"
import * as _ from 'lodash';
import * as vsComponents from './components/index'
import defineVuesaxFunctions from './functions/defineVuesaxFunctions'
import * as vsLayouts from './layout/index'
import './styles/vuesax.sass'
import { defineVuesaxOptions, VuesaxOptions } from './util/defineVuesaxOptions'

const install = (app: App, options?: VuesaxOptions) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    const chunks = vsComponent.toString().split(".");
    const name = chunks[chunks.length-1];
    
    app.component(_.kebabCase(name), vsComponent);
  })
  // layout
  Object.values(vsLayouts).forEach((vsLayout) => {
    const chunks = vsLayout.toString().split(".");
    const name = chunks[chunks.length-1];

    app.component(_.kebabCase(name), vsLayout);
  })

  if (options) {
    defineVuesaxOptions(options)
  }

  defineVuesaxFunctions(app);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export default install
export default install
