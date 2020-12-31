import { App } from "vue";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getColor } from '../util/index'

export default class VsComponent extends Vue {
  static install: (app: App) => void

  static use: (vue: any) => any

  componentColor = "";
  getColor: any = null;

  @Prop({ type: String, default: null }) color!: string

  @Prop({ type: Boolean, default: false }) danger!: boolean

  @Prop({ type: Boolean, default: false }) success!: boolean

  @Prop({ type: Boolean, default: false }) warn!: boolean

  @Prop({ type: Boolean, default: false }) dark!: boolean

  @Prop({ type: Boolean, default: false }) primary!: boolean

  @Prop({ type: Boolean, default: false }) active!: boolean

  get isColorDark() {
    return this.color === 'dark' || this.dark || this.componentColor === 'dark'
  }

  get isColor() {
    return !!this.color || !!this.primary || !!this.success || !!this.warn || !!this.danger || !!this.dark
  }

  mounted() {
    this.getColor = getColor(this.color)
  }
}
