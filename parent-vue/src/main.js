import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from "single-spa"


async function loadScript(url) {
	return new Promise((resolve, reject) => {
		let script = document.createElement('script');
		script.src = url;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script)
	})
}

/**
 * appName: string, 随便命名
 * applicationOrLoadingFn: Application<{}>, 加载应用的函数
 * activityFn: ActivityFn, 激活应用的函数
 * customProps?: {} | CustomPropsFn<{}>，自定义内容
 */
registerApplication('myChildVueApp',
	async () => {  // single-spa规定用promise函数
		console.log('加载模块')

		// systemJS singlespa用的这个模块加载方案，可以在浏览器中使用esm
		await loadScript(`http://localhost:10000/js/chunk-vendors.js`)
		await loadScript(`http://localhost:10000/js/app.js`)
		return window.singleVue
	},
	location => location.pathname.indexOf('/vue') > -1)

start()

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
