import { h, VNode } from "vue";
import { Vue } from "vue-class-component";
import { Prop, Watch } from 'vue-property-decorator'
import VsIconsClose from '../../../icons/close'
import { setColor } from '../../../util/index'


export default class VsNotification extends Vue {

  isVisible: boolean = false
  content: any = null

  @Prop({ type: String })
  title = "";

  @Prop({ type: String })
  text = "";

  @Prop({ type: String })
  color: string | null = null

  @Prop({ type: String })
  colorName: string | null = null

  @Prop({ type: String })
  border: string | null = null

  @Prop({ type: String })
  icon: string | null = null
  
  @Prop({ type: Function })
  onClickClose: any = null

  @Prop({ type: Function })
  onClick: any = null

  @Prop({ type: Boolean, default: true })
  buttonClose: boolean = true

  @Prop({ type: Boolean, default: true })
  flat: boolean = true

  @Prop({ type: Function })
  onDestroy: any = null

  @Prop({ type: Boolean, default: false })
  sticky: boolean = false

  @Prop({ type: Boolean, default: false })
  square: boolean = false

  @Prop({ type: String })
  width: string|null = null;

  @Prop({ type: Boolean, default: false })
  loading: boolean = false

  @Prop({ type: Boolean, default: false })
  progressAuto: boolean = false

  @Prop({ type: Number, default: 0 })
  progress: number = 0

  @Prop({ type: Number, default: 4000 })
  duration: number = 4000

  @Prop({ type: Number, default: 0 })
  countProgress: number = 0

  intervalProgress: any = null

  @Prop()
  notPadding: any = null

  @Prop({ type: Boolean, default: false })
  clickClose: boolean = false

  @Prop({ type: String })
  classNotification: string|null = null

  @Prop({ type: Function, default: () => {} }) $destroy!: () => void;

  public close() {
    this.isVisible = false
  }

  public setLoading(val: boolean) {
    this.loading = val;
  }

  public changeProgress(val: number) {
    if (val) {
      this.progress = val;
    }
  }

  public toggleClass(val: string) {
    if (val) {
      this.classNotification = val;
      // TODO: Ensure el has a "closest" function
      this.$el.closest('.vs-notification-parent').classList.toggle(val);
    }
  }

  handleClickClose() {
    this.isVisible = false
  }

  beforeEnter(el: any) {
    el.style.maxHeight = `0px`
    el.style.padding = `0px 20px`
  }

  enter(el: any, done: any) {
    const h = el.scrollHeight
    el.style.maxHeight = `${h + 40}px`
    if (window.innerWidth < 600) {
      el.style.padding = `15px`
    } else {
      el.style.padding = `20px`
    }
    done()
  }

  leave(el: any, done: any) {
    const parent = this.$el.parentNode
    setTimeout(() => {
      done()
      if (parent.childNodes.length == 1) {
        document.body.removeChild(parent)
      }
      parent.removeChild(this.$el)
      this.$destroy()
      if (this.onDestroy) {
        this.onDestroy()
      }
    }, 250)
  }

  @Watch('isVisible')
  handleIsVisible() {
    this.$nextTick(() => {
      if (this.color) {
        setColor('color', this.color, this.$el)
      }
      if (this.border) {
        setColor('border', this.border, this.$el)
      }
    })
  }

  get getProgress() {
    setInterval(() => {
      this.progress++
    }, 1)
    return 20
  }

  mounted() {
    if (this.progressAuto) {
      this.intervalProgress = setInterval(() => {
        this.progress++
      }, (this.duration / 100))
    }
  }

  beforeDestroy() {
    clearInterval(this.intervalProgress)
  }

  public render(): VNode {
    const title = h('header', {
      staticClass: 'vs-notification__content__header'
    }, [
      h('h4', {
        domProps: {
          innerHTML: this.title
        },
      })
    ])

    const text = h('div', {
      staticClass: 'vs-notification__content__text'
    }, [
      h('p', {
        domProps: {
          innerHTML: this.text
        },
      })
    ])

    const content = h('div', {
      staticClass: 'vs-notification__content'
    }, [
      this.title && title,
      this.text && text,
      this.content && h(this.content)
    ])

    const icon = h('div', {
      staticClass: 'vs-notification__icon',
      domProps: {
        innerHTML: this.icon
      },
    })

    const closeBtn = h('button', {
      staticClass: 'vs-notification__close',
      on: {
        click: this.handleClickClose
      }
    }, [
      h(VsIconsClose, {
        props: {
          hover: 'less'
        }
      })
    ])

    const loading = h('div', {
      staticClass: 'vs-notification__loading',
    })

    const progress = h('div', {
      staticClass: 'vs-notification__progress',
      style: {
        width: `${this.progress}%`
      }
    })

    return h('transition', {
      props: {
        name: 'notification'
      },
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      },
    }, [
      this.isVisible && h('div', {
          staticClass: 'vs-notification',
          class: [
            { 'vs-notification--color': this.color },
            { 'vs-notification--border': this.border },
            { 'vs-notification--icon': this.icon },
            { 'vs-notification--onClick': this.onClick },
            { 'vs-notification--onClickClose': this.onClickClose },
            { 'vs-notification--flat': this.flat },
            { 'vs-notification--sticky': this.sticky },
            { 'vs-notification--square': this.square },
            { 'vs-notification--width-all': this.width == '100%' },
            { 'vs-notification--width-auto': this.width == 'auto' },
            { 'vs-notification--loading': this.loading },
            { 'vs-notification--notPadding': this.notPadding },
            `vs-notification--${this.colorName}`,
            this.classNotification
          ],
          on: {
            click: () => {
              if (this.onClick) {
                this.onClick()
              }
              if (this.clickClose) {
                this.close()
                if (this.onClickClose) {
                  this.onClickClose()
                }
              }
            }
          }
        }, [
          (!this.loading && this.icon) && icon,
          !this.loading && content,
          this.buttonClose && closeBtn,
          this.loading && loading,
          progress
        ])
      ]
    )
  }
}
