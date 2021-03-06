import { VNode, h } from 'vue'
import { Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

export default class VsTableTr extends VsComponent {
  @Prop({}) colspan: number = 0;
  hidden: boolean = true

  @Prop({ type: Function, default: () => {} }) 
  $destroy!: () => void;

  @Watch('hidden')
  handleChangeHidden(val: boolean) {
    if (val) {
      setTimeout(() => {
        this.$el.parentNode.removeChild(this.$el)
        this.$destroy();
      }, 300)
    } else {
      this.$nextTick(() => {
        const content: any = this.$refs.content
        content.style.height = `${content.scrollHeight}px`
      })
    }
  }

  public render(): VNode {
    const subContent = h('div', {
      staticClass: 'vs-table__expand__td__content__sub',
    }, [
      this.$slots.default?.()
    ])

    const content = h('div', {
      staticClass: 'vs-table__expand__td__content',
      ref: 'content'
    }, [
      subContent
    ])

    const td = h('td', {
      staticClass: 'vs-table__expand__td',
      attrs: {
        colspan: this.colspan
      }
    }, [
      content
    ])

    const expand = h('tr', {
      staticClass: 'vs-table__tr__expand'
    }, [
      td
    ])

    return h('transition', {
      props: {
        name: 'fade-expand'
      }
    }, [!this.hidden && expand])
  }
}
