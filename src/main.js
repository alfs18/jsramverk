import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Me from '@/components/Me'
import Report from '@/components/Report'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Me",
            component: Me
        },
        {
            path: "/reports/week/1",
            name: "Report",
            component: Report
        }
    ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
