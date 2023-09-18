// import Vue from 'vue'
// import App from '@/App.vue'
// import Router from 'vue-router'
// import Me from '@/components/Me.vue'
// // import Report from '../src/components/Report.vue'
//
// // import App from '@/App.vue'
// //
// // createApp(App).mount('#app')
//
// Vue.use(Router)
//
// export default new Router({
//     routes: [
//         {
//             path: '/me',
//             name: 'Me',
//             component: Me
//         },
//         {
//             path: '/report/:kmom',
//             name: 'Report',
//             component: Report
//         }
//     ]
// })
//
// console.log(Router);
// console.log(Me);
// console.log(Report);


// Test:
import { createRouter, createWebHistory } from 'vue-router'
import Me from '@/components/Me.vue'
// import Report from '../components/Report.vue'

const routes = [
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    {
        path: '/reports/week/:kmom',
        name: 'Report',
        component: ()=>import('../components/Report.vue')
    },
    {
        path: '/register',
        name: 'CreateAccount',
        component: ()=>import('../components/CreateAccount.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: ()=>import('../components/Login.vue')
    },
    {
        path: '/logged-in',
        name: 'LoggedIn',
        component: ()=>import('../components/LoggedIn.vue')
    },
    {
        path: '/reports/create',
        name: 'CreateText',
        component: ()=>import('../components/CreateText.vue')
    },
    {
        path: '/reports/edit/:kmom',
        name: 'EditText',
        component: ()=>import('../components/EditText.vue')
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
