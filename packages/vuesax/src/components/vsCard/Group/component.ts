import { VNode, h } from 'vue'
import VsIconsArrow from '../../../icons/arrow'
import VsComponent from '../../../mixins/component'

export default class VsCardGroup extends VsComponent {
  public render(): VNode {
    const arrowPrev = h('button', {
      staticClass: 'vs-card__group-prev',
      on: {
        click: (evt: any) => {
          console.log('paso')
          const cards: any = this.$refs.cards
          console.dir(cards)
          cards.scrollTo(cards.scrollLeft - cards.clientWidth, 0)
        }
      }
    }, [
      h(VsIconsArrow)
    ])

    const arrowNext = h('button', {
      staticClass: 'vs-card__group-next',
      on: {
        click: (evt: any) => {
          console.log('paso')
          const cards: any = this.$refs.cards
          console.dir(cards)
          cards.scrollTo(cards.scrollLeft + cards.clientWidth, 0)
        }
      }
    }, [
      h(VsIconsArrow)
    ])

    const space = h('div', {
      staticClass: 'vs-card__group-space',
    })

    const cards = h('div', {
      staticClass: 'vs-card__group-cards',
      ref: 'cards'
    }, [
      this.$slots.default?.(),
      space
    ])

    return h('div', {
      staticClass: 'vs-card__group',
    }, [
      arrowPrev,
      cards,
      arrowNext
    ])
  }
}
