import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui' // 引入element组件
import 'element-ui/lib/theme-chalk/index.css' // element引入样式
// import './styles/index.less' // 引入重置的基本样式

Vue.use(ElementUi) // 注册elements组件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
