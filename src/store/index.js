import Vuex from 'vuex'
import Vue from 'vue'

import TodoItemApi from '../api/TodoItemApi.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    selectedState: 'all'
  },
  actions: {
    fetchItems(context) {
      TodoItemApi.getTodoList().then(data => context.commit('setItems', data))
    },
    addItem(context, payload) {
      TodoItemApi.add(payload).then(() => context.dispatch('fetchItems'))
    },
    removeItem(context, id) {
      TodoItemApi.delete(id).then(() => context.dispatch('fetchItems'))
    },
    updateItem(context, payload) {
      TodoItemApi.update(payload).then(() => context.dispatch('fetchItems'))
    }
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    updateSelectedState(state, selectedState) {
      state.selectedState = selectedState
    }
  },
  getters: {
    selectedItem(state) {
      if (state.selectedState === 'all') {
        return state.items
      }
      if (state.selectedState === 'unCompleted') {
        return state.items.filter(item => !item.isCompleted)
      }
      return state.items.filter(item => item.isCompleted)
    },
    selectedCount(state, getters) {
      return getters.selectedItem.length
    },
    selectedState(state) {
      return state.selectedState
    }
  }
})