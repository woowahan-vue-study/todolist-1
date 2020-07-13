import Vuex from "vuex";
import Vue from "vue";
import TodoItemApi from "../api/TodoItemApi.js";
import { FilterType } from "../util/constant.js";
import {
  ADD_TODO,
  FETCH_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO
} from "./actionType.js";
import {
  REMOVE_TODO_ITEM_IN_LIST,
  SET_TODO_ITEMS,
  UPDATE_TODO_ITEM_FILTER_TYPE,
  UPDATE_TODO_ITEM_IN_LIST
} from "./mutationsType.js";
import {
  GET_COUNT_OF_FILTERED_ITEM,
  GET_FILTER_TYPE,
  GET_FILTERED_ITEMS
} from "./gettersType.js";

Vue.use(Vuex);

const state = {
  items: [],
  filterType: FilterType.ALL
};

const actions = {
  [FETCH_TODOS](context) {
    TodoItemApi.get().then(({ data }) => context.commit(SET_TODO_ITEMS, data));
  },
  [ADD_TODO](context, payload) {
    TodoItemApi.add(payload).then(() => context.dispatch(FETCH_TODOS));
  },
  [REMOVE_TODO](context, payload) {
    TodoItemApi.delete(payload).then(() =>
      context.commit(REMOVE_TODO_ITEM_IN_LIST, payload)
    );
  },
  [TOGGLE_TODO](context, payload) {
    TodoItemApi.update(payload).then(() =>
      context.commit(UPDATE_TODO_ITEM_IN_LIST, payload)
    );
  }
};

const mutations = {
  [SET_TODO_ITEMS](state, items) {
    state.items = items;
  },
  [UPDATE_TODO_ITEM_IN_LIST](state, item) {
    const index = state.items.findIndex(oldItem => oldItem._id === item._id);
    state.items.splice(index, 1, item);
  },
  [REMOVE_TODO_ITEM_IN_LIST](state, id) {
    const index = state.items.findIndex(item => item._id === id);
    state.items.splice(index, 1);
  },
  [UPDATE_TODO_ITEM_FILTER_TYPE](state, filterType) {
    state.filterType = filterType;
  }
};

const getters = {
  [GET_FILTERED_ITEMS](state) {
    return state.items.filter(item => state.filterType.predicate(item));
  },
  [GET_COUNT_OF_FILTERED_ITEM](state, getters) {
    return getters[GET_FILTERED_ITEMS].length;
  },
  [GET_FILTER_TYPE](state) {
    return state.filterType;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
