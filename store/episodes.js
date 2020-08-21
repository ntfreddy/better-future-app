export const state = () => ({
    episodes: {
        episodes: [],
        activeIndex: 0,
        episode: {}
    },
    navigation: {
        visible: false,
        list: [{
            id: "author",
            title: ""
        }, {
            id: "benefits",
            title: "Benefits"
        }, {
            id: "audience",
            title: "Audience"
        }, {
            id: "advantages",
            title: "Advantages"
        }, {
            id: "testimonials",
            title: "Testimonials"
        }]
    },
    questions: {
        total: 0
    },
    quill: {
        palette: []
    },
    voting: {}
})

export const getters = {

}

export const mutations = {

    SET_EPISODE(state, episode) {
        state.episode = episode;
    }
}

export const actions = {

}