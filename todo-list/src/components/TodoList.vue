
<template>
    <div class="main">
        <input class="toggle-all" type="checkbox">
        <ul id="todo-list" class="todo-list" >
            <TodoItem
                    v-for="todoItem in todoItems"
                    :key = "todoItem.id"
                    :item = "todoItem"
                    @onDelete = "deleteTodoItem"
            />
        </ul>
    </div>
</template>
<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        components: {TodoItem},
        data() {
            return {
                todoItems: this.$store.state.todoItems
            }
        },
        methods: {
            deleteTodoItem(id) {
                this.todoItems.splice(id,1)
            }
        }
    }
</script>