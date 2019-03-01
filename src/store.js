import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false,
    orders: []
  },
  getters: {
    user: (state) => state.user,
    orders: (state) => state.orders,
  },
  mutations: {
    addOrder: (state, order) => {
      state.orders.splice(state.orders.length, 0, order)
    },
    setUser: (state, value) => {
      state.user = value
    }
  },
  actions: {

  }
})
