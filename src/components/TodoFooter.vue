<template>
  <div class="count-container">
    <todo-count />
    <todo-filter />
  </div>
</template>

<script>
import TodoCount from "./TodoCount.vue";
import TodoFilter from "./TodoFilter.vue";

export default {
  components: {
    TodoCount,
    TodoFilter
  }
};
</script>
