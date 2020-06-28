import Vue from "vue";
import Vuex from "vuex";
import { FILTER } from "../assets/constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoId: 0,
    todoItems: [],
    todoFilter: FILTER.ALL,
  },
  mutations: {
    ADD_TODO(state, content) {
      state.todoItems.push({
        id: state.todoId++,
        content: content,
        isCompleted: false,
        isEditing: false,
      });
    },
    DELETE_TODO(state, id) {
      state.todoItems = state.todoItems.filter((item) => item.id !== id);
    },
    CHANGE_VIEW(state, target) {
      state.todoFilter = FILTER.of(target);
    },
  },
  actions: {},
  modules: {},
});
