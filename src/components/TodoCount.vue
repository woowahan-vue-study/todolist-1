<template>
  <div class="count-container">
    <span class="todo-count"
      >총 <strong> {{ count }} </strong> 개</span
    >
    <todo-filter />
  </div>
</template>

<script>
import TodoFilter from "./TodoFilter";
import { FILTER } from "../utils/constants";

export default {
  name: "TodoCount",
  components: {
    TodoFilter,
  },
  computed: {
    count() {
      const filter = this.$store.state.todoFilter;
      if (filter === FILTER.ACTIVE) {
        return this.$store.state.todoItems.filter((item) => !item.isCompleted)
          .length;
      } else if (filter === FILTER.COMPLETED) {
        return this.$store.state.todoItems.filter((item) => item.isCompleted)
          .length;
      }
      return this.$store.state.todoItems.length;
    },
  },
};
</script>
