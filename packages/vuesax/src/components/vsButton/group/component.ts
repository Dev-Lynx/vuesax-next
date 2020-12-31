import { VNode, h } from 'vue';
import VsComponent from '../../../mixins/component'

export default class VsButton extends VsComponent {
  public Class: string = ''

  public prototype: any

  public render(): VNode {

    const btnGroup = h('div', {
      staticClass: 'vs-button-group'
    }, this.$slots.default )

    return btnGroup
  }
}
