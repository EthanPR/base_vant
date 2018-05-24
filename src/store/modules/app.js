const app = {
    state: {
        title: '',
        showLArrow: true,
        rightText:'',
        needTools: true
    },
    mutations: {
        TOGGLE_TITLE: (state, payload) => {
             state.title = payload.title
        },
        TOGGLE_LARROW: (state, payload) => {
            state.showLArrow = payload.showLArrow
        },
        TOGGLE_RIGHT_TEXT: (state, payload) => {
            state.rightText = payload.rightText
        },
        TOGGLE_TOOLS: (state, payload) => {
            state.needTools = payload.needTools
        }
    },
    actions: {
        ToggleTitle: ({ commit },payload) => {
            commit('TOGGLE_TITLE', payload)
        },
        ToggleLArrow:({commit}, payload) => {
            commit('TOGGLE_LARROW', payload)
        },
        ToggleLRightText:({commit}, payload) => {
            commit('TOGGLE_RIGHT_TEXT', payload)
        },
        ToggleTools:({commit}, payload) => {
            commit('TOGGLE_TOOLS', payload)

        }
    }
}

export default app

