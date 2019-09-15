import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Me from '@/components/Me'
import Report from '@/components/Report'
import Report2 from '@/components/Report2'
import Registration from '@/components/Registration'

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
        },
        {
            path: "/reports/week/2",
            name: "Report2",
            component: Report2
        },
        {
            path: "/registration",
            name: "Registration",
            component: Registration
        }
    ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
