<template>
    <input
            id="new-todo-title"
            class="new-todo"
            placeholder="할일을 추가해주세요"
            autofocus
            @keyup="addTodo"
            v-model="inputValue"
    />
</template>

<script>
    export default  {
        name: "TodoInput",
        data() {
            return {
                inputValue: "",
            }
        },

        methods: {
            addTodo(e) {
                const value = e.target.value;
                console.log(value)
            }
        }
    }
</script>