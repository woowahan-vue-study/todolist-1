<template>
  <div class="count-container">
    <todo-count></todo-count>
    <todo-filters></todo-filters>
  </div>
</template>

<script>
import todoCount from "./todoCount";
import todoFilters from "./todoFilters";

export default {
  components: {
    "todo-count": todoCount,
    "todo-filters": todoFilters,
  },
};
</script>

<style></style>
