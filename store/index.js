var store = new Vuex.Store({
    state: {
        count: 208
    },
    mutations: {
        add (state) {
            state.count++
        }
    }
})