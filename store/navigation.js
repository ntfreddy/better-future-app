export const state = () => ({
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