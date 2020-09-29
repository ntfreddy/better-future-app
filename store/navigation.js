export const state = () => ({
    visible: false,
    list: [{
        id: "actions",
        title: "Service"
    }, {
        id: "episode-info",
        title: "Message"
    }]
})

export const getters = {

}

export const mutations = {
    SET_NAV_LIST(state, list) {
        state.list = list;
    }
}

export const actions = {

}