<template>
  <ul id="todo-list" class="todo-list">
    <todo-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      :filter="filter"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  created() {
    this.$store.dispatch("LOAD_TODO");
  },
  computed: {
    items() {
      return this.$store.state.todoItems;
    },
    filter() {
      return this.$store.state.todoFilter;
    },
  },
};
</script>
