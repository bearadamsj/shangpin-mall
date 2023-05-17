import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/Pages/Home'
//change to lazy route
// import Search from '@/Pages/Search'
import Login from '@/Pages/Login'
import Register from '@/Pages/Register'
import Detail from '@/Pages/Detail'
import AddCartSuccess from '@/Pages/AddCartSuccess'
import ShopCart from '@/Pages/ShopCart'
import store from '@/store'
import Trade from '@/Pages/Trade'
import Pay from '@/Pages/Pay'
import PaySuccess from '@/Pages/PaySuccess'
import Center from '@/Pages/Center'
import myOrder from '@/Pages/Center/myOrder'
import groupOrder from '@/Pages/Center/groupOrder'

let originalPush = VueRouter.prototype.push
let originalReplace = VueRouter.prototype.replace

// rewrite the push method
VueRouter.prototype.push = function (path, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, path, resolve, reject)

    } else {
        originalPush.call(this, path, () => { }, () => { })
    }

}

// rewrite the replace method 
VueRouter.prototype.replace = function (path, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, path, resolve, reject)
    } else {
        originalReplace.call(this, path, () => { }, () => { })
    }

}


let router = new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { showFooter: true },
            name: "home",
        },
        {
            path: "/search/:keyword?",
            component: () => import('@/Pages/Search'),
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

        },
        {
            path: "/detail/:kuid?",
            component: Detail,
            name: "detail",
        },
        {
            path: "/addcartsuccess",
            component: AddCartSuccess,
            meta: { showFooter: true },
            name: 'addcartsuccess',
        },
        {
            path: "/shopcart",
            component: ShopCart,
            meta: { showFooter: true },
            name: "shopcart",
        },
        {
            path: "/trade",
            component: Trade,
            meta: { showFooter: true },
            name: "trade",
            beforeEnter: (to, from, next) => {
                if(from.path=='/shopcart'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            path: "/pay",
            component: Pay,
            meta: { showFooter: true },
            name: "pay",
            beforeEnter: (to, from, next) => {
                if(from.path=='/trade'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            path: "/paysuccess",
            component: PaySuccess,
            meta: { showFooter: true },
            name: "paysuccess",
        },
        {
            path: "/center",
            component: Center,
            meta: { showFooter: true },
            name: "center",
            children: [
                {
                    path: "myOrder",
                    component: myOrder,
                },
                {
                    path: "groupOrder",
                    component: groupOrder
                },
                {
                    path: "/center",
                    redirect: "/center/myOrder"
                }
            ]
        },
    ]
})

router.beforeEach(async (to, from, next) => {

    // next()
    let token = store.state.user.token
    //already logged in
    if (token) {
        if (to.path == '/login') {
            next('/')
        } else {

            if (store.state.user.userinfo.name) {
                next()
            } else {
                try {
                    await store.dispatch('autoLoginAction')
                    next()
                } catch (error) {
                    await store.dispatch('logoutAction')
                    next('/login')
                }

            }
        }

    } else {
        //not logged in 
        let toPath = to.path
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){
            next('/login?redirect='+toPath)
        }else{
            next()
        }
        
    }
})

export default router