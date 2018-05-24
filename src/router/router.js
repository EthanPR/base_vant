import _import from './_import'

export const appRouter = [{
            path: "/login",
            name: "登录",
            meta: {
                needTools: false
            },
            component: _import("base/login")
        }, {
            path: "/pass",
            name: "登录",
            meta: {
                needTools: false
            },
            component: _import("base/login/pass.vue")
        }, {


        path: "/",
        name: "/",
        redirect: "/home",
    }, {
        path: "/home",
        name: "首页",
        component: _import("home")
    }


]

export const otherRouter = [{
    path: '/demo',
    icon: 'key',
    name: '测试页',
    component: _import("demo")
}, ]

export const routers = [
    ...appRouter,
    ...otherRouter
]
