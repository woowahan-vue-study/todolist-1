import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    autoIncrementId: 0,
    todoItems: [],
    status: "all",
  },
  getters: {
    filteredTodoItems: function (state) {
      switch (state.status) {
        case "active":
          return state.todoItems.filter((item) => !item.isCompleted);
        case "completed":
          return state.todoItems.filter((item) => item.isCompleted);
        default:
          return state.todoItems;
      }
    },
    activeTodoItemsSize: function (state) {
      return state.todoItems.filter((item) => !item.isCompleted).length;
    },
  },
  mutations: {
    addNewTodo: (state, payload) => {
      const newTodo = {
        id: ++state.autoIncrementId,
        title: payload.trim(),
        isCompleted: false,
        isEditing: false,
        titleToEdit: payload.trim(),
      };
      console.log(newTodo);
      state.todoItems.push(newTodo);
    },
    changeStatus(state, payload) {
      state.status = payload;
    },
    deleteById(state, payload) {
      const index = state.todoItems.findIndex((item) => item.id === payload);
      state.todoItems.splice(index, 1);
    },
    toggleEditingById(state, payload) {
      const index = state.todoItems.findIndex((item) => item.id === payload);
      let changedTodo = state.todoItems[index];
      changedTodo.isEditing = !changedTodo.isEditing;
      state.todoItems.splice(index, 1, changedTodo);
    },
    toggleCompletedById(state, payload) {
      const index = state.todoItems.findIndex((item) => item.id === payload);
      let changedTodo = state.todoItems[index];
      changedTodo.isCompleted = !changedTodo.isCompleted;
      state.todoItems.splice(index, 1, changedTodo);
    },
    editById(state, { id, title }) {
      const index = state.todoItems.findIndex((item) => item.id === id);
      let changedTodo = state.todoItems[index];
      changedTodo.title = title;
      state.todoItems.splice(index, 1, changedTodo);
      this.toggleEditingById(id);
    },
    cancelEditingById(state, payload) {
      const index = state.todoItems.findIndex((item) => item.id === payload);
      state.todoItems[index].titleToEdit = state.todoItems[index].title;
      this.toggleEditingById(payload);
    },
  },
  actions: {},
  modules: {},
});
