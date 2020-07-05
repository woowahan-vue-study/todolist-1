<template>
    <input
            id="new-todo-title"
            class="new-todo"
            placeholder="할일을 추가해주세요"
            autofocus
            @keyup.enter="addTodo"
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
                console.log(this.$store.state.todoItems)
                const value = e.target.value;
                this.$store.state.todoItems.push({
                    id:num++,
                    value: value,
                    isCompleted: false,
                    isEditing: false
                })
                this.inputValue = "";
            },
        }
    }
    let num = 0;
</script>