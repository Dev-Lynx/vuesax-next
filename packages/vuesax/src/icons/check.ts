import { Vue } from "vue-class-component";
import { VNode, h } from 'vue'
import { Prop } from 'vue-property-decorator'
import './icons.sass'


export default class VsIconClose extends Vue {
  @Prop({ type: Boolean, default: false }) indeterminate: boolean

  render(): VNode {
    const icon = h('i', {
      staticClass: 'vs-icon-check',
      on: {
        // https://v3.vuejs.org/guide/migration/listeners-removed.html#overview
        // TODO: Filter out listeners
        ...this.$attrs
      },
      class: [
        {
          indeterminate: this.indeterminate
        }
      ]
    }, [
      h('span', {} , [
        h('div', {
          staticClass: 'line1'
        }),
        h('div', {
          staticClass: 'line2'
        })
      ])
    ])

    return icon
  }
}
