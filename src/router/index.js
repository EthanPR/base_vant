import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import {routers} from './router';
import {
    Toast
} from 'vant';


Vue.use(Router)

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};
const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
    if (to.path != '/login' &&  to.path != '/pass') {
        Toast.loading({
            mask: true,
            message: '加载中...',
            duration: 0
        });
    }
    next()
})

router.afterEach((to, from, next) => {
    store.dispatch('ToggleTitle',{title: to.name});
    if (to.path == '/login' || to.path == "/pass") {
        store.dispatch('ToggleTools', {
            needTools: false
        })
    }else{
         store.dispatch('ToggleTools', {
             needTools: true
         })
    }
    if (to.path == '/home' || to.path == '/login' || to.path == "/") {
        store.dispatch('ToggleLArrow', {
            showLArrow: false
        })
    }else{
         store.dispatch('ToggleLArrow', {
             showLArrow: true
         })
    }
    setTimeout(() => {
        Toast.clear()
    }, 1000);
})

export default router

