import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/Pages/Home'
import Search from '@/Pages/Search'
import Login from '@/Pages/Login'
import Register from '@/Pages/Register'

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { showFooter: true }
        },
        {
            path: "/search",
            component: Search,
            meta: { showFooter: true }
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/",
            redirect: "/home",
            meta: { showFooter: true }

        }
    ]
})