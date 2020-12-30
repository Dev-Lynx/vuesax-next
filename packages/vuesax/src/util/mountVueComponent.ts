// Original Source: https://github.com/pearofducks/mount-vue-component/blob/master/index.js
// Author: https://github.com/pearofducks
import { App, createVNode, render, VNodeProps, VNodeTypes } from 'vue';

const mount = (
  component: VNodeTypes, 
  { props, children, element, app }: 
  { props?: VNodeProps&Record<string, unknown>, children?: unknown, element?: Element, app?: App  } = {}) => {
  let el = element;

  let vNode = createVNode(component, props, children);
  
  if (app && app._context) {
    vNode.appContext = app._context;
  }

  if (el) render(vNode, el);
  else if (typeof document !== 'undefined' ) render(vNode, el = document.createElement('div'));

  const destroy = () => {
    if (el) render(null, el)
    el = null
    vNode = null
  }

  vNode.component.props.$destroy = destroy;

  return { vNode, destroy, el }
}

export default mount;
