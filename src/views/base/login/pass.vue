<template>
    <div class="container">
        <div class="back" @click="back">
            <Icon name="arrow-left" />
            <span>返回</span>
        </div>
        <div class="actions">
            <Icon name="password-not-view" class="icon" />
            <div class="tools">输入密码</div>
            <div class="input-tools">
                <!-- 密码输入框 -->
                <PasswordInput :value="password" info="密码为 6 位数字" @focus="showKeyboard = true" />
                <!-- 数字键盘 -->
                <NumberKeyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
            </div>
            <p :class="password==''?'btn-p':'btn-p-active'" @click="login">
                <span>登录</span>
                <Icon name="exchange-record" />
            </p>
        </div>
        <Popup v-model="showNamePopup" position="top" :overlay="false" class="popup-name-container">
            <Icon name="info-o" />
            <span>登录成功是不可能的，这辈子都不可能~</span>
        </Popup>

    </div>
</template>

<script>
    import {
        Icon,
        PasswordInput,
        NumberKeyboard,
        Toast,
        Popup
    } from 'vant';
    export default {
        components: {
            Icon,
            PasswordInput,
            NumberKeyboard,
            Toast,
            Popup
        },
        data() {
            return {
                password: '',
                showKeyboard: true,
                showNamePopup: false
            };
        },

        methods: {
            back() {
                this.$router.go(-1)
            },
            onInput(key) {
                this.password = (this.password + key).slice(0, 6);
            },
            onDelete() {
                this.password = this.password.slice(0, this.password.length - 1);
            },
            login() {
                if (this.password == '199718') {
                    Toast.loading({
                        mask: true,
                        message: '正在登录...',
                        duration: 0
                    });
                    setTimeout(() => {
                        Toast.clear();
                        this.$router.push({
                            path: '/'
                        })
                    }, 2000);
                } else {
                    this.showNamePopup = true;
                    setTimeout(() => {
                        this.showNamePopup = false;
                    }, 2000);
                }

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
            height: 500px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -40%;
            margin-top: -250px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            p {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                i {
                    margin-left: 5px;
                }
            }
            .btn-p {
                font-size: 16px;
                color: #aeaeae;
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
            }
            .input-tools {
                width: 100%;
                margin-top: 30px;
            }
        }
    }

    .back {
        width: 50px;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 5px 0 0 20px;
        i {
            color: #5a77ff;
            font-size: 16px;
        }
        span {
            color: #5a77ff;
            font-size: 14px;
        }
    }

    .popup-name-container {
        background-color: #FB6155;
        color: #fff;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 2px 1px 2px #333;
        i {
            margin: 0 10px;
            color: #fff;
            font-size: 20px;
        }
        span{
            font-size: 14px;
        }
    }
</style>
