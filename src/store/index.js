import Vue from "vue";
import Vuex from "vuex";
import { FILTER } from "../utils/constants";
import api from "../api/todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [],
    todoFilter: FILTER.ALL,
  },
  mutations: {
    async LOAD_TODO(state) {
      state.todoItems = await api.todo.getAll().catch((error) => alert(error));
    },
    async ADD_TODO(state, content) {
      await api.todo.create({ content }).catch((error) => alert(error));
      const newTodo = await api.todo.getAll().catch((error) => alert(error));
      state.todoItems.push(newTodo[newTodo.length - 1]);
    },
    COMPLETE_TODO(state, id) {
      api.todo.toggle(id).catch((error) => alert(error));
    },
    DELETE_TODO(state, id) {
      state.todoItems = state.todoItems.filter((item) => item._id !== id);
      api.todo.delete(id).catch((error) => alert(error));
    },
    CHANGE_VIEW(state, target) {
      state.todoFilter = FILTER.of(target);
    },
  },
  actions: {},
  modules: {},
});
