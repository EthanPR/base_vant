<template>
    <div id="app">
        <div class="need-container" v-if="needTools">
            <NavBar :title="title" @click-left="back" @click-right="onClickRight" :left-text="showLArrow?'返回':null" :right-text="rightText" :left-arrow="showLArrow" />
            <transition :name="transitionName">
                <router-view class="router"></router-view>
            </transition>
            <Tabbar v-model="activeTab">
                <TabbarItem :to="item.path" :icon="item.icon" :key="index" v-for="(item, index) in tabbarList">{{item.name}}</TabbarItem>
            </Tabbar>
        </div>
        <div class="not-need-container" v-else>
            <transition :name="transitionName">
                <router-view class="router-not-need"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import {
        NavBar,
        Tabbar,
        TabbarItem,
        Loading
    } from 'vant';
    import {
        mapState,
        mapActions
    }
    from 'vuex'

    export default {
        components: {
            NavBar,
            Tabbar,
            TabbarItem,
            Loading
        },
        computed: {
            ...mapState({
                title: state => state.app.title,
                showLArrow: state => state.app.showLArrow,
                rightText: state => state.app.rightText,
                needTools: state => state.app.needTools,
            }),
        },
        data() {
            return {
                transitionName: 'slide-left',
                activeTab:0,
                tabbarList:[
                    {
                        name:'首页',
                        icon:'shop',
                        path:'/'
                    },
                    {
                        name:'页面一',
                        icon:'chat',
                        path:'/demo'
                    },
                    {
                        name:'登录',
                        icon:'records',
                        path:'/login'
                    },

                ]
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            // 如果存在右侧菜单，此处可添加菜单的点击事件
            onClickRight(){}
        }
    };
</script>

<style lang="less" scoped>
    body {
        background-color: #f8f8f8;
    }

    .router {
        width: 100%;
        transition: all 0.3s ease;
        position: absolute;
        top: 46px;
        left: 0;
        right: 0;
        bottom: 50px;
    }
    .router-not-need {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(100%, 0);
        transform: translate(100%, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        display: none;
        -webkit-transform: translate(-100%, 0);
        transform: translate(-100% 0);
    }

    .van-cell__title .van-icon {
        font-size: 18px;
    }

    #app {
        width: 100%;
        height: 100%;
    }
    .need-container, .not-need-container{
        width: 100%;
        height: 100%;
    }
</style>
