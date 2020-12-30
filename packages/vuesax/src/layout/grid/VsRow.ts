import { Options, Vue } from "vue-class-component";
import { VNode, h } from 'vue'
import { Prop } from 'vue-property-decorator'

export default class VsRow extends Vue {
  // tslint:disable-next-line:member-access
  static install: (vue: any) => any
  // tslint:disable-next-line:member-access
  static use: (vue: any) => any

  @Prop({ type: Number, default: 12 }) public w!: number

  @Prop({ type: String, default: 'flex-start' }) public justify!: string

  @Prop({ type: String, default: 'flex-start' }) public align!: string

  @Prop({ type: String, default: 'row' }) public direction!: string

  public render(): VNode {

    const vsRow = h('div', {
      staticClass: 'vs-row',
      style: {
        justifyContent: this.justify,
        alignItems: this.align,
        flexDirection: this.direction
      },
    }, this.$slots.default() )

    return vsRow
  }
}
