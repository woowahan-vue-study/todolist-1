<template>
    <ul class="filters">
        <li>
            <a class="all selected" data-value="all" @click="allTodoItem">전체보기</a>
        </li>
        <li>
            <a class="active" data-value="active" @click="doTodoItem">해야할 일</a>
        </li>
        <li>
            <a class="completed" data-value="completed" @click="completeTodoItem">완료한 일</a>
        </li>
    </ul>
</template>

<script>
    export default  {
        name: "TodoSelectedItem",

        methods: {
            allTodoItem(e) {
                this.$store.state.todoItems.forEach((todoItem) => todoItem.isSelected = false)
                this.changeSelectState(e)
            },

            doTodoItem(e) {
                this.$store.state.todoItems.forEach((todoItem) => todoItem.isSelected = true)
                const doTodoItem = this.$store.state.todoItems.filter((item) => item.isCompleted === false)
                doTodoItem.forEach((todoItem) => todoItem.isSelected = todoItem.isCompleted);
                this.changeSelectState(e)
            },

            completeTodoItem(e) {
                this.$store.state.todoItems.forEach((todoItem) => todoItem.isSelected = true)
                const completeTodoItem = this.$store.state.todoItems.filter((item) => item.isCompleted === true)
                completeTodoItem.forEach((todoItem) => todoItem.isSelected = !todoItem.isCompleted);
                this.changeSelectState(e)
            },

            changeSelectState(e) {
                const $filters = e.target.closest("ul");
                console.log($filters)
                $filters.querySelector(".selected").classList.toggle("selected");
                e.target.classList.toggle("selected");
            }
        }
    }
</script>