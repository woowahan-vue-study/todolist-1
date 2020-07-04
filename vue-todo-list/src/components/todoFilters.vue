<template>
  <ul class="filters">
    <todo-filter></todo-filter>
  </ul>
</template>

<script>
import filter from "./todoFilter";

export default {
  components: {
    "todo-filter": filter,
  },
};
</script>

<style></style>
