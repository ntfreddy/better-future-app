export const state = () => ({
    time: 0,
    startTime: 0,
    episodes: [],
    activeIndex: 0,
    episode: {}
})

export const getters = {

}

export const mutations = {
    SET_TIME(state, time) {
        state.time = time;
    },
    SET_START_TIME(state, startTime) {
        state.startTime = startTime;
    },
    SET_EPISODE(state, episode) {
        state.episode = episode;
    },
}

export const actions = {

}