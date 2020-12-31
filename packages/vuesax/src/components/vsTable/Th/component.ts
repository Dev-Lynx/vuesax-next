import { VNode, h } from 'vue'
import { Prop } from 'vue-property-decorator'
import VsIconsArrow from '../../../icons/arrow'
import VsComponent from '../../../mixins/component'

export default class VsTableTh extends VsComponent {
  @Prop({ default: false, type: Boolean }) sort!: boolean

  mounted() {
    (this.$el as HTMLElement).style.width = `${this.$el.scrollWidth}px`
  }

  public render(): VNode {
    const icon2 = h(VsIconsArrow, {
      staticClass: 'icon-sort-2'
    })
    const icon = h(VsIconsArrow, {
      staticClass: 'icon-sort-1'
    })

    const icons = h('div', {
      staticClass: 'vs-table__th__content__icons'
    }, [
      icon,
      icon2
    ])

    const content = h('div', {
      staticClass: 'vs-table__th__content',
    }, [
      this.$slots.default?.(),
      this.sort && icons
    ])

    return h('th', {
      staticClass: 'vs-table__th',
      class: {
        sort: this.sort
      },
      on: {
        // https://v3.vuejs.org/guide/migration/listeners-removed.html#overview
        // TODO: Filter out listeners
        ...this.$attrs
      }
    }, [
      content
    ])
  }
}
