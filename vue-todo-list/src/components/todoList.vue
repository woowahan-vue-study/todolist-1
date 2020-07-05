<template>
  <ul id="todo-list" class="todo-list">
    <todo-item
      v-for="todoItem in todoItems"
      v-bind:key="todoItem._id"
      v-bind:todoItem="todoItem"
    ></todo-item>
  </ul>
</template>

<script>
import todoItmeComponent from "./todoItem";
import { FILTER } from "../utils/contants";

export default {
  components: {
    "todo-item": todoItmeComponent,
  },
  computed: {
    todoItems() {
      if (this.$store.state.todoFilter === FILTER.ACTIVE) {
        return this.$store.state.todoItems.filter(
          ({ isCompleted }) => !isCompleted
        );
      } else if (this.$store.state.todoFilter === FILTER.COMPLETED) {
        return this.$store.state.todoItems.filter(
          ({ isCompleted }) => isCompleted
        );
      }
      return this.$store.state.todoItems;
    },
  },
  created() {
    this.$store.commit("LOAD_TODO");
  },
};
</script>

<style></style>
