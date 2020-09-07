export const state = () => ({
    visibleTopBtn: false,
    activePopup: ""
})

export const getters = {
    activePopup: state => {
        return state.activePopup
    }
}

export const mutations = {
    SET_VISIBLE_TOP_BUTTON(state, visibleTopBtn) {
        state.visibleTopBtn = visibleTopBtn;
    },
    SET_ACTIVE_POPUP(state, activePopup) {
        state.activePopup = activePopup;
    }
}

export const actions = {
    OPEN({ commit }, id) {
        commit('SET_ACTIVE_POPUP', id);
    },
    CLOSE({ commit }) {
        commit('SET_ACTIVE_POPUP', "");
    }
}