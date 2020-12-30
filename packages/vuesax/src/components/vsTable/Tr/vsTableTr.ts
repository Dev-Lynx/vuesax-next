import { VNode, h, createVNode, render } from 'vue'
import { Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import expand from './vsTableExpand'


export default class VsTableTr extends VsComponent {
  @Prop({}) data: any
  @Prop({ type: Boolean, default: false }) isSelected: boolean
  @Prop({ type: Boolean, default: false }) notClickSelected: boolean
  @Prop({ type: Boolean, default: false }) openExpandOnlyTd: boolean
  expand: boolean = false
  instanceExpand: any = null

  insertAfter(element: any) {
    if (this.$el.nextSibling) {
      this.$el.parentNode.insertBefore(element, this.$el.nextSibling)
    } else {
      this.$el.parentNode.appendChild(element)
    }
  }

  @Watch('data')
  handleChangeData() {
    (this.$el as HTMLElement).style.removeProperty(`--vs-color`)
    if (this.instanceExpand) {
      this.instanceExpand.$data.hidden = true
      this.instanceExpand = null
      // this.expand = false
    }
  }

  handleClickHasExpand() {
    if (this.instanceExpand) {
      this.instanceExpand.$data.hidden = !this.instanceExpand.$data.hidden
      this.instanceExpand = null
      // this.expand = false
    } else {
      const colspan = this.$parent.$el.querySelectorAll('thead th').length
      
      //const trExpand = Vue.extends(expand)
      // const trExpand = createVNode(expand, { colspan });
      // this.instanceExpand = new trExpand()
      // this.instanceExpand.$props.colspan = colspan


      // Reference: https://www.reddit.com/r/vuejs/comments/iwc7o4/vue3_what_happen_to_vueextend/
      // https://github.com/pearofducks/mount-vue-component/blob/master/index.js

      // TODO: I'm pretty sure VsTableTr don't work properly. fix it.
      const instance = createVNode(expand, { colspan });
      instance.appContext = this.$.appContext;

      this.instanceExpand = instance;
      this.instanceExpand.$slots.default = this.$slots.expand
      // this.instanceExpand.vm = this.instanceExpand.$mount()
      this.instanceExpand.$data.hidden = false;
      
      // this.insertAfter(this.instanceExpand.vm.$el);
      this.insertAfter(instance.el);
      // this.expand = true
    }
  }

  public render(): VNode {
    return h('tr', {
      staticClass: 'vs-table__tr',
      on: {
        click: (evt: any) => {
          if (this.$slots.expand) {
            if (
              (this.openExpandOnlyTd ? evt.target.nodeName == 'TD' : true) &&
              !evt.target.className.includes('isEdit')) {
              this.handleClickHasExpand()
            }
          }

          if (evt.target.nodeName == 'TD' && !this.notClickSelected) {
            (this.$parent as any).selected(this.data)
            this.$emit('selected', this.data)
          }

          this.$emit('click', evt)
        }
      },
      class: {
        selected: this.isSelected,
        isExpand: !!this.instanceExpand,
        expand: this.$slots.expand
      }
    }, this.$slots.default)
  }
}
