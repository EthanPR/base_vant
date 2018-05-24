<template>
    <div class="container">
        <div class="no-num" @click="goRegister">
            注册
        </div>
        <div class="actions">
            <Icon name="points" class="icon" />
            <div class="tools">输入用户名</div>
            <p>我已同意不知道有没有什么协议</p>
            <div class="input">
                <input type="text" v-model="username" class="el-input">
                <Icon name="edit" class="edit" />
            </div>
            <p :class="username==''?'btn-p':'btn-p-active'" @click="goNext">下一步</p>
        </div>
        <Popup v-model="showPopup" position="right" :overlay="false" class="popup-container">
            <NavBar title="啊哈~" left-text="返回" left-arrow @click-left="closePopup" />
            <div class="content">
                <img src="@/assets/txfail.png">
                <p>电子竞技不开放注册~</p>
                <p>惊不惊喜？！意不意外？！</p>
            </div>
        </Popup>
        <Popup v-model="showNamePopup" position="top" :overlay="false" class="popup-name-container">
            <Icon name="info-o"/>
            <span>你的账号估计是捡来的~</span>
        </Popup>
    </div>
</template>

<script>
    import {
        Icon,
        Popup,
        NavBar
    } from 'vant';
    export default {
        components: {
            Icon,
            Popup,
            NavBar
        },
        data() {
            return {
                username: '',
                showPopup: false,
                showNamePopup: false
            }
        },
        methods: {
            goNext() {
                if (this.username != '' && this.username == 'ethan') {
                    this.$router.push({
                        path: '/pass',
                        query: {
                            name: this.username
                        }
                    })
                }else{
                    setTimeout(() => {
                        this.showNamePopup = true;
                    }, 1000);
                    setTimeout(() => {
                        this.showNamePopup = false;
                    }, 2000);
                }
            },
            goRegister() {
                this.showPopup = true;
            },
            closePopup() {
                this.showPopup = false;
            }
        }
    }
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        height: 100%;
        background: url('./../../../assets/login-bg.png') center no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
        .actions {
            display: inline-block;
            width: 80%;
            height: 400px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -40%;
            margin-top: -200px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            p {
                color: #aeaeae;
                font-size: 14px;
            }
            .btn-p {
                font-size: 16px;
            }
            .btn-p-active {
                font-size: 16px;
                color: #5a77ff;
            }
            .icon {
                font-size: 60px;
                color: #5a77ff;
                margin-bottom: 10px;
            }
            .tools {
                color: #333;
                font-size: 20px;
                text-align: center;
                &:last-of-type {
                    margin-top: 20px;
                }
            }
            .el-input {
                border: 0;
                border-bottom: 1px solid #ccc;
                width: 100%;
                margin-top: 10px;
                padding-left: 30px;
                height: 30px;
                line-height: 30px;
            }
            .edit {
                margin-top: -25px;
                float: left;
            }
        }
    }

    .no-num {
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: right;
        color: #fff;
        margin-top: 10px;
        font-size: 14px;
        float: right;
        margin-right: 20px;
    }

    .popup-container {
        width: 100%;
        height: 100%;
        background-color: #fff;
        .content {
            width: 100%;
            height: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img {
                width: 80%;
            }
            p{
                color: #aeaeae;
                &:last-of-type{
                    color: #333;
                }
            }
        }
    }
    .popup-name-container{
        background-color: #FB6155;
        color: #fff;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 2px 1px 2px #333;
        i{
            margin: 0 10px;
            color: #fff;
            font-size: 20px;
        }
    }
</style>
