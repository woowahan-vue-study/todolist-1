<template>
  <ul id="todo-list" class="todo-list">
    <TodoItem></TodoItem>
  </ul>
</template>

<script>
  import TodoItem from "./TodoItem";
  export default {
    name: "TodoList",
    components: {
      TodoItem
    }
  }
</script>