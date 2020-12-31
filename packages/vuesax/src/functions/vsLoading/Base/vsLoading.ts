import { VNode, h } from "vue";
import { Vue } from "vue-class-component";
import { Component, Prop, Watch } from 'vue-property-decorator'
import { setColor, setVar } from '../../../util/index'

export default class VsLoading extends Vue {
  text: string | null = null

  type: string = 'default'

  color: string | null = null

  background: string | null = null

  opacity: string | null = null

  percent: string | null = null

  progress: string | null = null

  scale: string | null = null

  target: any = null

  isVisible: boolean = false

  @Prop({ type: Function, default: () => {} }) $destroy!: () => void;

  public close() {
    this.isVisible = false
    document.body.style.overflowY = 'auto'
    setTimeout(() => {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el);
    }, 250)
  }

  public changePercent(val: string) {
    if (val) {
      this.percent = val;
    }
  }

  public changeProgress(val: string) {
    if (val) {
      this.progress = val;
    }
  }

  public changeText(val: string) {
    if (val) {
      this.text = val;
    }
  }

  @Watch('isVisible')
  handleIsVisible() {
    this.$nextTick(() => {
      if (this.color) {
        // TODO: Specify a default color>
        setColor('color', this.color, this.$el)
      }
      
      if (this.background) {
        setColor('background', this.background, this.$el)
      }
      
      if(this.opacity) {
        setVar('opacity', this.opacity, this.$el)
      }
    })
  }

  public render(): VNode {
    const animation = h('div', {
      class: ['vs-loading__load__animation'],
    }, [
      h('div', {
        staticClass: 'vs-loading__load__percent'
      }, [
        this.percent
      ]),
      h('div', {
        staticClass: 'vs-loading__load__animation__1'
      }),
      h('div', {
        staticClass: 'vs-loading__load__animation__2'
      }),
      h('div', {
        staticClass: 'vs-loading__load__animation__3'
      })
    ])

    // TODO: Figure out how to create a text element with h
    
    const text = h('div', {
      class: ['vs-loading__load__text'],
    }, this.text ?? "");

    const loading = h('div', {
      class: ['vs-loading__load'],
      style: {
        transform: `scale(${this.scale})`
      },
    }, [
      animation,
      text
    ])

    const progress = h('div', {
      class: ['vs-loading__progress'],
    }, [
      h('div', {
        staticClass: 'vs-loading__progress__bar',
        style: {
          width: `${this.progress}%`
        }
      })
    ])

    return h('transition', {
      props: {
        name: 'loading'
      }
    }, [
      this.isVisible && h('div', {
          staticClass: 'vs-loading',
          class: [
            `vs-loading--${this.type || 'default'}`,
            { 'vs-loading--target': !!this.target },
            { 'vs-loading--background': !!this.background }
          ],
        }, [
          loading,
          this.progress && progress
        ])
      ]
    )
  }
}
