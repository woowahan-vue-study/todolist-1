<template>
  <ul class="filters" ref="filters">
    <TodoFilterItem
      v-for="filter in filters"
      :key="filter.name"
      :filter="filter"
    />
  </ul>
</template>

<script>
import TodoFilterItem from "./TodoFilterItem";

export default {
  name: "TodoFilter",
  components: {
    TodoFilterItem,
  },
  computed: {
    filters() {
      return this.$store.state.todoFilter;
    },
  },
};
</script>
