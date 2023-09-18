// import './assets/main.css'
//
// import { createApp } from 'vue'
// import App from './App.vue'
//
//
// // createApp(App).mount('#app')
//
// // Test:
//
// // import Vue from 'vue'
// // import Router from 'vue-router'
// import Me from '@/components/Me.vue'
// import Report from '@/components/Report.vue'
// // import router from '@/router'
//
//
// const routes = [
//     {
//         path: '/',
//         name: 'Me',
//         component: Me
//     },
//     {
//         path: '/report/:kmom',
//         name: 'Report',
//         component: Report
//     },
// ]
//
// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })
//
//
// // const app = Vue.createApp({})
// const app = Vue.createApp(App)
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router)
//
// console.log(app);
// // Vue.component('router-link', app.use(options.components.RouterLink));
// // Vue.component('router-view', Vue.options.components.RouterView);
//
// app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// createApp(App)
// .use(router)
// .mount('#app')

const app = createApp(App)
app
    .use(router)
    .mount('#app')

// funktion för att spara token
app.config.globalProperties.setGlobalToken = function (value) {
    app.config.globalProperties.token = value;
}
