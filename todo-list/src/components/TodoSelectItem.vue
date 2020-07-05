<template>
    <ul class="filters">
        <li>
            <a class="all selected" @click="allTodoItem">전체보기</a>
        </li>
        <li>
            <a class="active" @click="doTodoItem">해야할 일</a>
        </li>
        <li>
            <a class="completed" @click="completeTodoItem">완료한 일</a>
        </li>
    </ul>
</template>

<script>
    export default  {
        name: "TodoSelectedItem",

        methods: {
            allTodoItem() {
              this.$store.state.todoItems.forEach((todoItem) => todoItem.isSelected = false)
            },
            doTodoItem() {
                this.$store.state.todoItems.forEach((todoItem) => todoItem.isSelected = true)
                const doTodoItem = this.$store.state.todoItems.filter((item) => item.isCompleted === false)

                doTodoItem.forEach((todoItem) => todoItem.isSelected = todoItem.isCompleted);
            },
            completeTodoItem() {
                this.$store.state.todoItems.forEach((todoItem) => todoItem.isSelected = true)
                const completeTodoItem = this.$store.state.todoItems.filter((item) => item.isCompleted === true)
                completeTodoItem.forEach((todoItem) => todoItem.isSelected = !todoItem.isCompleted);
            }
        }
    }
</script>