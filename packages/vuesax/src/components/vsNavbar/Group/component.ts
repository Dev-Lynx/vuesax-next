import { VNode, h } from 'vue'
import VsComponent from '../../../mixins/component'

export default class VsNavbarGroup extends VsComponent {
  setModel(id: any) {
    const parent: any = this.$parent
    parent.setModel(id)
  }
  setLeftLine() {
    const parent: any = this.$parent
    const left = (this.$el as any).offsetLeft
    parent.setLeftLine(left)
    const width = (this.$refs.item as any).scrollWidth
    parent.setWidthLine(width)
  }
  setWidthLine() {}

  public render(): VNode {
    const item = h('button', {
      staticClass: 'vs-navbar__group__item',
      ref: 'item'
    }, [
      this.$slots.default?.()
    ])
    const items = h('div', {
      staticClass: 'vs-navbar__group__items'
    }, [
      this.$slots.items?.()
    ])

    return h('div', {
      staticClass: 'vs-navbar__group',
    }, [
      item,
      items
    ])
  }
}
