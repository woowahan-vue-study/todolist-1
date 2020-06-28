<template>
  <ul id="todo-list" class="todo-list">
    <TodoItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @onDelete="onDelete"
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
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onDelete(id) {
      this.$emit(`onDelete`, id);
    },
  },
};
</script>
