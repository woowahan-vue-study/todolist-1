<template>
  <section class="todoapp">
    <div>
      <h1>TODOS</h1>
      <todo-input></todo-input>
    </div>
    <div class="main">
      <todo-list></todo-list>
    </div>
    <todo-count></todo-count>
  </section>
</template>

<script>
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoCount from "./components/TodoCount";

export default {
  name: "App",
  components: { TodoCount, TodoList, TodoInput },
};
</script>
