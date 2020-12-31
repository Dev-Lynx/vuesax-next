import { VNode, h } from 'vue';
import { Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

export default class VsAvatarGroup extends VsComponent {
  @Prop({ default: null, type: Number }) max!: number|null;

  @Prop({ default: false, type: Boolean }) float!: boolean

  avatars: any[] = []

  vsAvatarGroup: boolean = true

  public render(): VNode {
    return h("div", {
      staticClass: 'vs-avatar__group',
      class: {
        float: this.float
      }
    }, {
      [this.$slots.default?.().toString() ?? "default"]: this.$slots.default?.()
    })
  }
}
