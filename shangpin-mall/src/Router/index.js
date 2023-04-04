import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/Pages/Home'
import Search from '@/Pages/Search'
import Login from '@/Pages/Login'
import Register from '@/Pages/Register'
let originalPush = VueRouter.prototype.push
let originalReplace = VueRouter.prototype.replace

// rewrite the push method
VueRouter.prototype.push = function (path, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject)
    } else {
        originalPush.call(this, localStorage, () => { }, () => { })
    }

}

// rewrite the replace method 
VueRouter.prototype.replace = function (path, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, location, resolve, reject)
    } else {
        originalReplace.call(this, location, () => { }, () => { })
    }

}
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { showFooter: true }
        },
        {
            path: "/search/:keyword?",
            component: Search,
            meta: { showFooter: true },
            name: "search",
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