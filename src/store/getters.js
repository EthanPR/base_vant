const getters = {
    title: state => state.app.title,
    showLArrow: state => state.app.showLArrow,
    rightText: state => state.app.rightText,
    needTools: state => state.app.needTools,
    nickname: state => state.user.nickname,
    logined: state => state.user.logined,
}
export default getters
