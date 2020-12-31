import { VNode, h } from 'vue'
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import './icons.sass'


export default class VsIconClose extends Vue {
  @Prop({ type: String, default: null }) public hover!: string | null

  render(): VNode {
    const icon = h('i', {
      staticClass: 'vs-icon-close',
      class: [
        `vs-icon-hover-${this.hover}`
      ],
      ref: 'icon'
    })

    return icon
  }
}
