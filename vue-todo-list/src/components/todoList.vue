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

export default {
  components: {
    "todo-item": todoItmeComponent,
  },
  computed: {
    todoItems() {
      return this.$store.state.todoItems;
    },
  },
  created() {
    this.$store.commit("LOAD_TODO");
  },
};
</script>

<style></style>
