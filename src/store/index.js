import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    selectedState: 'all'
  },
  actions,
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    updateSelectedState(state, selectedState) {
      state.selectedState = selectedState
    }
  },
  getters
})