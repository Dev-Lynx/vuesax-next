import { VNode, h } from 'vue';
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsAvatarGroup extends VsComponent {
  @Prop({ default: null }) max: number

  @Prop({ default: false, type: Boolean }) float: boolean

  avatars: any[] = []

  vsAvatarGroup: boolean = true

  public render(): VNode {
    return h("div", {
      staticClass: 'vs-avatar__group',
      class: {
        float: this.float
      }
    }, {
      [this.$slots.default.toString()]: this.$slots.default
    })
  }
}
