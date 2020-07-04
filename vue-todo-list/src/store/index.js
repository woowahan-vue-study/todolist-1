import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { FILTER, BASE_URL } from "../utils/contants";

Vue.use(Vuex);

const AXIOS = axios.create({
  baseURL: BASE_URL,
});

export default new Vuex.Store({
  state: {
    todoItems: [],
    todoFilter: FILTER.ALL,
  },
  mutations: {
    async LOAD_TODO(state) {
      try {
        state.todoItems = await AXIOS.get("");
      } catch (error) {
        alert(error);
      }
    },
    async ADD_TODO(state, content) {
      try {
        await AXIOS.post("", {
          content: content,
        });
        state.todoItems = await AXIOS.get("");
      } catch (error) {
        alert(error);
      }
    },
    // COMPLETE_TODO(state, id) {
    //   api.todo.toggle(id).catch((error) => alert(error));
    // },
    // DELETE_TODO(state, id) {
    //   state.todoItems = state.todoItems.filter((item) => item._id !== id);
    //   api.todo.delete(id).catch((error) => alert(error));
    // },
    // CHANGE_VIEW(state, target) {
    //   state.todoFilter = FILTER.of(target);
    // },
  },
  actions: {},
  modules: {},
});
