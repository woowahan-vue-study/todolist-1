<template>
  <div class="count-container">
    <span class="todo-count"
      >총 <strong>{{ count }}</strong> 개</span
    >
    <TodoFilter></TodoFilter>
  </div>
</template>

<script>
import TodoFilter from "./TodoFilter";

export default {
  name: "TodoCount",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  components: {
    TodoFilter,
  },
};
</script>
