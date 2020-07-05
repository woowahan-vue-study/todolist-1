import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: []
  },
  mutations: {
    DELETE_TODO(state, id) {
    }
  },
  actions: {},
  modules: {}
});
