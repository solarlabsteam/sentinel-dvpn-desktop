import { createStore, createLogger } from 'vuex'

export default createStore({
  state () {
    return {
      count: 1
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  plugins: [createLogger()]
})
