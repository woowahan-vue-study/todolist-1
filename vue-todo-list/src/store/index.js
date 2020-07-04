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
        state.todoItems = await (await AXIOS.get("")).data;
      } catch (error) {
        alert(error);
      }
    },
    async ADD_TODO(state, content) {
      try {
        await AXIOS.post("", {
          content: content,
        });
        state.todoItems = await (await AXIOS.get("")).data;
      } catch (error) {
        alert(error);
      }
    },
    async COMPLETE_TODO(state, id) {
      try {
        await AXIOS.put(`/${id}/toggle`);
        state.todoItems = await (await AXIOS.get("")).data;
      } catch (error) {
        alert(error);
      }
    },
    async DELETE_TODO(state, id) {
      try {
        await AXIOS.delete(`/${id}`);
        state.todoItems = await (await AXIOS.get("")).data;
      } catch (error) {
        console.log(error);
      }
    },
    // CHANGE_VIEW(state, target) {
    //   state.todoFilter = FILTER.of(target);
    // },
  },
  actions: {},
  modules: {},
  getters: {
    allItemLength: (state) => {
      return state.todoItems.length;
    },
    actvieItemLength: (state) => {
      return state.todoItems.filter((todoItem) => !todoItem.isCompleted).length;
    },
    completedItemLength: (state) => {
      return state.todoItems.filter((todoItem) => todoItem.isCompleted).length;
    },
  },
});
