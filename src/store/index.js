import Vuex from "vuex";
import Vue from "vue";

import { FilterType } from "../util/constant.js";
import actions from "./actions.js";
import getters from "./getters.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    filterType: FilterType.ALL
  },
  actions,
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    updateFilterType(state, filterType) {
      state.filterType = filterType;
    }
  },
  getters
});
