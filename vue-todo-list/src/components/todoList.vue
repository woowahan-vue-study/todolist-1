<template>
    <ul id="todo-list" class="todo-list">
        <todo-item></todo-item>
    </ul>
</template>

<script>
import todoItme from "./todoItem"
export default {
components:{
    'todo-item': todoItme
}
}
</script>

<style>

</style>