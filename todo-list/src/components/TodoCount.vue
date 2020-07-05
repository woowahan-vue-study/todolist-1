<template>
    <div class="count-container">
        <span class="todo-count">총 <strong> {{ this.$store.state.todoItems.filter((item) => item.isSelected === false).length }}</strong> 개</span>
        <TodoSelectedItem/>
    </div>
</template>

<script>
    import TodoSelectedItem from "./TodoSelectItem";
    export default  {
        name: "TodoCount",
        components: {TodoSelectedItem},
        methods: {
        },
    }
</script>