<template>
  <div class="count-container">
    <span class="todo-count"
      >총 <strong>{{ count }}</strong> 개</span
    >
    <TodoFilter :filter="filter" @onFilter="onFilter"></TodoFilter>
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
    filter: {
      type: String,
      required: true,
    },
  },
  components: {
    TodoFilter,
  },
  methods: {
    onFilter(value) {
      this.$emit("onFilter", value);
    },
  },
};
</script>
