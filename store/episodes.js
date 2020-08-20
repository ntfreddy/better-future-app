export const state = () => ({
    list: []
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false,
            id: Date.now()
        })
    },
    remove(state, todo) {
        state.list = state.list.filter(item => item.id !== todo.id)
    },
    SET_EPISODE(state, episode) {}
}