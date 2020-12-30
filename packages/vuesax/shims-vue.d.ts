declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import "@vue/runtime-corer";
import { Router } from "vue-router";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $router: Router;
    $isServer: boolean;
  }
}


import { WatchOptions } from "vue";
import "vue-property-decorator"

// Best solution I could find to fix @Watch typescript errors
// TODO: Open an issue about this
declare module "vue-property-decorator" {
  function Watch(path: string, options?: WatchOptions): MethodDecorator;
  function Ref(refKey?: string): MethodDecorator;
}
