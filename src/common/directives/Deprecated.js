const deprecated = {
    bind(el, binding, vnode) {
        const componentTag = vnode && vnode.context && vnode.context.$options && vnode.context.$options._componentTag;
        throw new Error(`Component \"${componentTag || ''}\" is deprecated. Use \"${binding.value}\" component instead`)
    },
    unbind(el, binding, vnode) {
      
    }
  };
  
  export default _.cloneDeep(deprecated);