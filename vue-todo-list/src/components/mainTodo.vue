<template>
  <div class="main">
    <input class="toggle-all" type="checkbox" />
    <todo-list></todo-list>
  </div>
</template>

<script>
import todoList from "./todoList"
export default {
    components:{
        'todo-list':todoList
    }
};
</script>

<style></style>
