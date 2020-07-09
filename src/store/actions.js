import TodoItemApi from "../api/TodoItemApi.js";

export default {
  fetchItems(context) {
    TodoItemApi.getTodoList().then(data => context.commit("setItems", data));
  },
  addItem(context, payload) {
    TodoItemApi.add(payload).then(() => context.dispatch("fetchItems"));
  },
  removeItem(context, id) {
    TodoItemApi.delete(id).then(() => context.dispatch("fetchItems"));
  },
  updateItem(context, payload) {
    TodoItemApi.update(payload).then(() => context.dispatch("fetchItems"));
  }
};
