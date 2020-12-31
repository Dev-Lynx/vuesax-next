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
    app.use(vsComponent);

    // const chunks = vsComponent.toString().split(".");
    // const name = chunks[chunks.length-1];
    
    // app.component(_.kebabCase(name), vsComponent);
  })
  // layout
  Object.values(vsLayouts).forEach((vsLayout) => {
    app.use(vsLayout);
  });

  if (options) {
    defineVuesaxOptions(options)
  }

  defineVuesaxFunctions(app);
}

export default install
