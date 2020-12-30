import { App } from "vue"
import * as vsComponents from './components/index'
import defineVuesaxFunctions from './functions/defineVuesaxFunctions'
import * as vsLayouts from './layout/index'
import './styles/vuesax.sass'
import { defineVuesaxOptions, VuesaxOptions } from './util/defineVuesaxOptions'

const toKebabCase = (str: string) =>
    str &&
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
       .map(x => x.toLowerCase())
       .join('-');

const install = (app: App, options?: VuesaxOptions) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    const chunks = vsComponent.toString().split(".");
    const name = chunks[chunks.length-1];
    
    app.component(toKebabCase(name), vsComponent);
  })
  // layout
  Object.values(vsLayouts).forEach((vsLayout) => {
    const chunks = vsLayout.toString().split(".");
    const name = chunks[chunks.length-1];

    app.component(toKebabCase(name), vsLayout);
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
