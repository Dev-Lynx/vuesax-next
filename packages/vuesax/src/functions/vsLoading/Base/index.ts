import VsLoading from "./vsLoading";
import mountVue from "../../../util/mountVueComponent";
import './style.sass'

interface LoadingParams {
  type?: string
  text?: string
  hidden?: boolean,
  color?: string,
  background?: string
  opacity?: string
  percent?: string
  progress?: string
  target?: any
  scale?: string
}

const loading = (params: LoadingParams = {}) => {
  const instance = new VsLoading()

  if (typeof params.target === 'string' ) {
    params.target = document.querySelector(params.target)
    // instance.$data.target = params.target
  } else if (params.target) {
    params.target = params.target.$el || params.target
    // instance.$data.target = params.target
  } else {
    params.target = document.body
  }

  mountVue(instance, { 
    props: {
      ...params
    }
  })  

  // instance.text = params.text
  // instance.color = params.color
  // instance.background = params.background
  // instance.opacity = params.opacity
  // instance.percent = params.percent
  // instance.type = params.type
  // instance.progress = params.progress
  // instance.scale = params.scale

  

  // params.target.appendChild(instance.$mount().$el)
  document.body.style.overflowY = params.hidden && 'hidden'
  
  instance.$nextTick(() => {
    instance.isVisible = true;
  })

  return instance
}

export default loading
