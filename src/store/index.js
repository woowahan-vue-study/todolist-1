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
    SET_TODO(state, items) {
      state.todoItems = items;
    },
    ADD_TODO(state, item) {
      state.todoItems.push(item);
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
  actions: {
    async LOAD_TODO(context) {
      const items = await api.todo.getAll().catch((error) => alert(error));
      context.commit("SET_TODO", items);
    },
    async ADD_TODO(context, content) {
      await api.todo.create({ content }).catch((error) => alert(error));
      const newItems = await api.todo.getAll().catch((error) => alert(error));
      context.commit("ADD_TODO", newItems[newItems.length - 1]);
    },
  },
  modules: {},
});
