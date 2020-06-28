<template>
  <div class="count-container">
    <span class="todo-count">총 <strong>0</strong> 개</span>
    <TodoFilter></TodoFilter>
  </div>
</template>

<script>
import TodoFilter from "./TodoFilter";

export default {
  name: "TodoCount",
  components: {
    TodoFilter,
  },
};
</script>
