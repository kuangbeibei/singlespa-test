import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from "single-spa-vue"

Vue.config.productionTip = false

const appOptions = {
  el: '#vue',  // 子应用所要挂在的父应用的dom节点，而非自己项目的dom节点
  router,
  render: h => h(App)
}

const childSpaLifeCycle = singleSpaVue({
  Vue, 
  appOptions
})

// 如果是嵌入在父应用内部
if (window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:10000/'
} else {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}




// 父应用要加载子应用，需要子应用暴露以下三个生命周期
export const bootstrap = childSpaLifeCycle.bootstrap;
export const mount = childSpaLifeCycle.mount;
export const unmount = childSpaLifeCycle.unmount;

//  子应用还需要打包成一个个lib去给父应用使用，要打包，所以vue.config.js





