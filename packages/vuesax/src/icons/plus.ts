import { VNode, h } from 'vue'
import { Vue } from 'vue-class-component'
import { Component, Prop } from 'vue-property-decorator'
import './icons.sass'
@Component
export default class VsIconClose extends Vue {
  @Prop({ type: Boolean, default: false }) public less!: boolean

  render(): VNode {
    const icon = h('i', {
      staticClass: 'vs-icon-plus',
      class: {
        less: this.less
      },
      ref: 'icon',
      on: {
        // https://v3.vuejs.org/guide/migration/listeners-removed.html#overview
        // TODO: Filter out listeners
        ...this.$attrs
      }
    })

    return icon
  }
}
